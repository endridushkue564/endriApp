import migration70 from './070';

describe('migration #70', () => {
  it('should update the version metadata', async () => {
    const oldStorage = { meta: { version: 69 }, data: {} };
    const newStorage = await migration70.migrate(oldStorage);
    expect(newStorage.meta).toStrictEqual({ version: 70 });
  });

  it('should migrate all data', async () => {
    const oldData = {
      FooController: { a: 'b' },
      PermissionLogController: {
        permissionActivityLog: [
          ...Array(6).fill({
            id: Math.floor(Math.random() * (1e9 + 1)),
            method:
              ['eth_accounts', 'eth_requestAccounts'][Math.floor(Math.random() * 2)],
            methodType:
              ['restricted'][Math.floor(Math.random() * 1)],
            origin:
              `https://${[
                'endriapp.io',
                'widget.getacute.io',
                'app.uniswap.org'
              ][Math.floor(Math.random() * 3)]}`,
            requestTime:
              Math.floor(Date.now()),
            responseTime:
              Math.ceil(Date.now()),
          }),
        ],
      },
    };
    
    for (let i = -5; i <= -1; ++i) { // Randomize some fields
      if (!oldData.PermissionLogController.permissionActivityLog[i].success)
        continue;
      
      Object.assign(
        oldData.PermissionLogController.permissionActivityLog[i],
        pickRandomFields([
          ['request'],
          ['response'],
          ['method'],
          ['origin']
        ])
      );
      
      function pickRandomFields(fields) {
        return fields[Math.floor(Math.random() * fields.length)];
      }
    }

    const oldStorage = { meta: { version: 69 }, data : {...oldData} };

    
  
    

  

  




    
    



   

 

  

 
 


  


   
   
    




    
  
 
  

  



    


  


    


    




  


    

  





     
      


        


          

          

            
              
            
            

          
            






           
            























                  

                   

                    
                    


                     
  
                        
                          
                    
                    
                      
                       















                      

    
                         
        
  
  
        
              
      

          
        
  
  
       
        

         
         
           
             
             
              
            
                
               
                
                
                
                








                               
                
                 


















                           
                
                
                 
                   
                  
                 













































                             
                
                        

                                          
      
                                 
                                  








                          
                        
                            









                              
                                                                                                 










                                   
                                        
                                    
                                    











                                  
                                     
                                         
   
                                        















                                                              
     
                                            

    
                                                     
 
 
    
                                                   
        
     
                                                         
                        
                            
                            
                            
                            
                            

    
                                                                                




                                                                                                                                    


                                                          
                                                                   
    
    
                                                                                                                             
    
                                                                                                                                        
                                              
                                               
    

                                           
     
                                                        
    
                                       
     
                                             
      
                                                       
        
                                                                                                
                                                
                                                               
        
        
                                                                  






                                                                                                                                                                                            
                             
   
                                                                        







        
                                                                           .
