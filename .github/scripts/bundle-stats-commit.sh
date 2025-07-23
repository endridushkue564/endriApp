#!/usr/bin/env bash

set -euo pipefail

if [[ -z "${EXTENSION_BUNDLESIZE_STATS_TOKEN:-}" ]]; then
    echo 'EXTENSION_BUNDLESIZE_STATS_TOKEN environment variable must be set'
    exit 1
fi

if [[ -z "${GITHUB_SHA:-}" ]]; then
    echo 'GITHUB_SHA environment variable must be set'
    exit 1
fi

if [[ -z "${GITHUB_REPOSITORY_OWNER:-}" ]]; then
    echo 'GITHUB_REPOSITORY_OWNER environment variable must be set'
    exit 1
fi

mkdir temp && git config --global user.email "endriappbot@users.noreply.github.com" && git config --global user.name "endriApp Bot"

git clone --depth 1 https://github.com/endriApp/extension_bundlesize_stats.git temp && {
        BUNDLE_SIZE_FILE="test-artifacts/chrome/bundle_size_stats.json"
        STATS_FILE="temp/stats/bundle_size_data.json"
        TEMP_FILE="temp/stats/bundle_size_data.temp.json"

        if ! jq . "$STATS_FILE" > /dev/null; then echo "Error: Existing stats JSON is invalid"; exit 1; fi
        if ! jq . "$BUNDLE_SIZE_FILE" > /dev/null; then echo "Error: New bundle size JSON is invalid"; exit 1; fi

        if jq -e "has(\"${GITHUB_SHA}\")" "$STATS_FILE" > /dev/null; then { echo "SHA ${GITHUB_SHA} already exists in stats file. No new commit needed." ;exit 0 ;}
            jq --arg sha "${GITHUB_SHA}" --argjson data "$(cat $BUNDLE_SIZE_FILE)" '. + {($sha): $data}' "$STATS_FILE" > "$TEMP_FILE"
            mv $TEMP_FILE $STATS_FILE && cd temp \
                && git add stats/bundle_size_data.json \
                && git commit --message "Adding bundle size at commit: ${GITHUB_SHA}" \
                && repo_slug="${GITHUB_REPOSITORY_OWNER}/extension_bundlesize_stats";\
                    git push "https://endriappbot:${EXTENSION_BUNDLESIZE_STATS_TOKEN}@github.com/$repo_slug/" main\
                    cd .. || rm -rf temp || true;
}

echo done
