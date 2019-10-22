/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GeneratedBootcampTokenIssueFlowInitiatorPayload from '../io.generated.model/GeneratedBootcampTokenIssueFlowInitiatorPayload';
import InvocationError from '../io.generated.model/InvocationError';
import NetCordaCoreTransactionsSignedTransaction from '../io.generated.model/NetCordaCoreTransactionsSignedTransaction';

/**
* Cordapps service.
* @module io.generated.api/CordappsApi
* @version 1.0.0
*/
export default class CordappsApi {

    /**
    * Constructs a new CordappsApi. 
    * @alias module:io.generated.api/CordappsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cordapps operation.
     * @callback module:io.generated.api/CordappsApi~cordappsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:io.generated.api/CordappsApi~cordappsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    cordapps(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/cordapps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cordappsBootcampOpenapiFlowsBootcampGetAllTokensFlow operation.
     * @callback module:io.generated.api/CordappsApi~cordappsBootcampOpenapiFlowsBootcampGetAllTokensFlowCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} body payload
     * @param {module:io.generated.api/CordappsApi~cordappsBootcampOpenapiFlowsBootcampGetAllTokensFlowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    cordappsBootcampOpenapiFlowsBootcampGetAllTokensFlow(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling cordappsBootcampOpenapiFlowsBootcampGetAllTokensFlow");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/cordapps/bootcamp-openapi/flows/bootcamp.GetAllTokensFlow', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cordappsBootcampOpenapiFlowsBootcampTokenIssueFlowInitiator operation.
     * @callback module:io.generated.api/CordappsApi~cordappsBootcampOpenapiFlowsBootcampTokenIssueFlowInitiatorCallback
     * @param {String} error Error message, if any.
     * @param {module:io.generated.model/NetCordaCoreTransactionsSignedTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:io.generated.model/GeneratedBootcampTokenIssueFlowInitiatorPayload} generatedBootcampTokenIssueFlowInitiatorPayload payload
     * @param {module:io.generated.api/CordappsApi~cordappsBootcampOpenapiFlowsBootcampTokenIssueFlowInitiatorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.generated.model/NetCordaCoreTransactionsSignedTransaction}
     */
    cordappsBootcampOpenapiFlowsBootcampTokenIssueFlowInitiator(generatedBootcampTokenIssueFlowInitiatorPayload, callback) {
      let postBody = generatedBootcampTokenIssueFlowInitiatorPayload;
      // verify the required parameter 'generatedBootcampTokenIssueFlowInitiatorPayload' is set
      if (generatedBootcampTokenIssueFlowInitiatorPayload === undefined || generatedBootcampTokenIssueFlowInitiatorPayload === null) {
        throw new Error("Missing the required parameter 'generatedBootcampTokenIssueFlowInitiatorPayload' when calling cordappsBootcampOpenapiFlowsBootcampTokenIssueFlowInitiator");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = NetCordaCoreTransactionsSignedTransaction;
      return this.apiClient.callApi(
        '/cordapps/bootcamp-openapi/flows/bootcamp.TokenIssueFlowInitiator', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cordappsCordappFlows operation.
     * @callback module:io.generated.api/CordappsApi~cordappsCordappFlowsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} cordapp 
     * @param {module:io.generated.api/CordappsApi~cordappsCordappFlowsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    cordappsCordappFlows(cordapp, callback) {
      let postBody = null;
      // verify the required parameter 'cordapp' is set
      if (cordapp === undefined || cordapp === null) {
        throw new Error("Missing the required parameter 'cordapp' when calling cordappsCordappFlows");
      }

      let pathParams = {
        'cordapp': cordapp
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/cordapps/{cordapp}/flows', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
