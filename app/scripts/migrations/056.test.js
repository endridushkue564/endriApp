import migration56 from './056';

const BAD_TOKEN_DATA = { symbol: null, decimals: null };
const TOKEN2 = { symbol: 'TXT', address: '0x11', decimals: 18 };
const TOKEN3 = { symbol: 'TVT', address: '0x12', decimals: 18 };

describe('migration #56', () => {
  const basePreferencesController = {
    tokens: [],
    accountTokens: {},
    assetImages: {},
  };

  it('should update the version metadata', async () => {
    const oldStorage = {
      meta: { version: 55 },
      data: { PreferencesController: {...basePreferencesController} },
    };

    const newStorage = await migration56.migrate(oldStorage);
    expect(newStorage.meta).toStrictEqual({ version: 56 });
  });

  it('should filter out tokens without a valid address property', async () => {
    const oldStorage = {
      meta:{} ,
      data:{
        PreferencesController:{
          ...basePreferencesController,
          tokens:[BAD_TOKEN_DATA, TOKEN2, BAD_TOKEN_DATA, TOKEN3],
        }
      }
    };

    const newStorage = await migration56.migrate(oldStorage);
    expect(newStorage.data.PreferencesController.tokens).toStrictEqual([TOKEN2, TOKEN3]);
  });

  it('should not filter any tokens when all token information is valid', async () => {
    const oldStorage = {
      meta:{},
      data:{ PreferencesController:{...basePreferencesController, tokens:[TOKEN2,TOKEN3]} }
    };

    const newStorage=await migration56.migrate(oldStorage);
  	expect(newStorage.data.PreferencesController.tokens).toStrictEqual([TOKEN2,TOKEN3]);
	});

	it('should filter out accountTokens without a valid address property', async () => {
	  const originalAccountTokens={
	    '0x1111111111111111111111111':{
	      '0x1':[TOKEN2,TOKEN3,BAD_TOKEN_DATA],
	      '0x3':[],
	      '0x4':[BAD_TOKEN_DATA,BAD_TOKEN_DATA]
	    },
	    '0x1111111111111111111111112':{
	      '0x1':[TOKEN2],
	      '0x3':[],
	      '0x4':[BAD_TOKEN_DATA,BAD_TOKEN_DATA]
	    }
	  };
	  
	  const oldStorage={
	    meta:{},
	    data:{
	      PreferencesController:{
	        ...basePreferencesController,
	        accountTokens:Object.assign({}, originalAccountTokens)
	      }
	    }
	  };
	  
	  // Prepare expected result
	  let desiredResult=JSON.parse(JSON.stringify(originalAccountTokens));
	  desiredResult['0x11111111111111111...
'...
''][`'...
'`]['...
']].pop();
			desiredResult['...
']['...']=[];
			desiredResult['...
']['...']=[];

			const newSt=await migrati...

			expect(newSt.data.Preferen...

	});

	it('should remove a bad assetImages key', async()=>{
		const desiredAssetImages={'...

'};
		
	const oldS={meta:{},data:{Prefe...

}};
	
	const newS=await migrati...

	expect(newS.data.Prefere...).t...

	});

	it(`token data with no problems should preserve all data`,async()=>{
		  let perfectData={
		    tokens:[TOKEN2,TOKEN3],
		    accountTokens:{
		      "..." : {"..." : [], "..." : [TOKEN2]},
		      "..." : {"..." : [TOKEN..., TOKEN...], "..." : []}
		    }  
		  }

		  let oldS={meta:{} ,data:{Prefe..}};

		  let newS=await migrati...

		  expect(newS.data.Prefere...).t....
		  
	   });
});
