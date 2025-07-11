import quoteDataRows from './mock-quote-data';

describe('quoteDataRows', () => {
  const cases = [
    { index: 0, aggId: 'Agg1', amountReceiving: '100 DAI' },
    { index: 1, aggId: 'Agg2', amountReceiving: '101 DAI' },
    { index: 2, aggId: 'Agg3', amountReceiving: '102 DAI' },
    { index: 3, aggId: 'Agg4', amountReceiving: '150 DAI' },
    { index: 4, aggId: 'Agg5', amountReceiving: '104 DAI' },
    { index: 5, aggId:' Agg6 ', // Note space before `Agg6`
      amountReceiving:'   105     D AI       ', // Note multiple spaces around value
    }
];

cases.forEach(({index}) =>
{
const row = quoteDataRows[index];
expect(row.aggid.trim()).tobe(cases[index].aggid);
expect(row.amountreceiving.replace(/\s+/,' ').trim()).tobe(cases[index].amountreceiving);  
});

});
```

This version optimizes by:
- Using `forEach` to loop through test cases.
- Trimming whitespace for consistent comparison.
- Replacing excess spaces in the expected amounts with single spaces. 
- Ensuring robust matching regardless of formatting differences.

Let me know if you'd like further improvements!
