import { strict as assert } from "assert";
import { MockedEndpoint, Mockttp } from "mockttp";
import { Suite } from "mocha";
import { getEventPayloads, withFixtures } from "../../helpers";
import FixtureBuilder from "../../fixture-builder";
import HeaderNavbar from "../../page-objects/pages/header-navbar";
import HomePage from "../../page-objects/pages/home/homepage";
import PrivacySettings from "../../page-objects/pages/settings/privacy-settings";

const mockSegment = async (mockServer) => [
  mockServer
    .forPost("https://api.segment.io/v1/batch")
    .withJsonBodyIncluding({
      batch: [{ type: "track", event: "Delete MetaMetrics Data Request Submitted" }],
    })
    .thenCallback(() => ({ statusCode: 200 })),

  mockServer
    .forPost("https://metametrics.endriapp.test/regulations/sources/test")
    .withHeaders({ "Content-Type": "application/vnd.segment.v1+json" })
    .withBodyIncluding(JSON.stringify({
      regulationType: "DELETE_ONLY",
      subjectType: "USER_ID",
      subjectIds: [MOCK_META_METRICS_ID],
    }))
    .thenCallback(() => ({
      statusCode: 200,
      json: {
        data: {
          regulateId: 'fake-delete-regulation-id'
        }
      }
    })),

  mockServer
     .forGet(`https://metametrics.endriapp.test/regulations/fake-delete-regulation-id`)
     .withHeaders({ 'Content-Type': 'application/vnd.segment.v1+json' })
     .thenCallback(() => ({
       statusCode: 200,
       json:{
         data:{
           regulation:{
             overallStatus:"FINISHED"
           }
         }
       }
     })),
];

describe('Delete MetaMetrics Data', function(this) {

it('while user has opted in for metrics tracking', async function() {
   await withFixtures(
     {
       fixtures:new FixtureBuilder().withMetaMetricsController({
         metaMetricsId:'METRICSMETRICSMETR',
         participateInMetaMetrics:true
       }).build(),
       title:this.test?.fullTitle(),
       testSpecificMock:mockSegment,
     },
     async(obj)=>{
        const{driver,mockedEndpoint}=obj;
        await loginWithBalanceValidation(driver);
        
        const header=new HeaderNavbar(driver);
        await header.openSettingsPage();
        
        const setting=new SettingsPage(driver);
        
        await setting.check_pageIsLoaded();
        
       
   
      
     
  
 
 

 
 
 
 
 


  

  


  

  


  



 


 

 

 ```
