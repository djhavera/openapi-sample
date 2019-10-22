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
import InvocationError from '../io.generated.model/InvocationError';
import IoBluebankBraidCordaServicesVaultVaultQuery from '../io.generated.model/IoBluebankBraidCordaServicesVaultVaultQuery';
import NetCordaCoreNodeServicesVaultPageNetCordaCoreContractsContractState from '../io.generated.model/NetCordaCoreNodeServicesVaultPageNetCordaCoreContractsContractState';

/**
* Vault service.
* @module io.generated.api/VaultApi
* @version 1.0.0
*/
export default class VaultApi {

    /**
    * Constructs a new VaultApi. 
    * @alias module:io.generated.api/VaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the vaultVaultQuery operation.
     * @callback module:io.generated.api/VaultApi~vaultVaultQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:io.generated.model/NetCordaCoreNodeServicesVaultPageNetCordaCoreContractsContractState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.contractStateType 
     * @param {module:io.generated.api/VaultApi~vaultVaultQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.generated.model/NetCordaCoreNodeServicesVaultPageNetCordaCoreContractsContractState}
     */
    vaultVaultQuery(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'contract-state-type': opts['contractStateType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NetCordaCoreNodeServicesVaultPageNetCordaCoreContractsContractState;
      return this.apiClient.callApi(
        '/vault/vaultQuery', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the vaultVaultQueryBy operation.
     * @callback module:io.generated.api/VaultApi~vaultVaultQueryByCallback
     * @param {String} error Error message, if any.
     * @param {module:io.generated.model/NetCordaCoreNodeServicesVaultPageNetCordaCoreContractsContractState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:io.generated.model/IoBluebankBraidCordaServicesVaultVaultQuery} ioBluebankBraidCordaServicesVaultVaultQuery vault
     * @param {module:io.generated.api/VaultApi~vaultVaultQueryByCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.generated.model/NetCordaCoreNodeServicesVaultPageNetCordaCoreContractsContractState}
     */
    vaultVaultQueryBy(ioBluebankBraidCordaServicesVaultVaultQuery, callback) {
      let postBody = ioBluebankBraidCordaServicesVaultVaultQuery;
      // verify the required parameter 'ioBluebankBraidCordaServicesVaultVaultQuery' is set
      if (ioBluebankBraidCordaServicesVaultVaultQuery === undefined || ioBluebankBraidCordaServicesVaultVaultQuery === null) {
        throw new Error("Missing the required parameter 'ioBluebankBraidCordaServicesVaultVaultQuery' when calling vaultVaultQueryBy");
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
      let returnType = NetCordaCoreNodeServicesVaultPageNetCordaCoreContractsContractState;
      return this.apiClient.callApi(
        '/vault/vaultQueryBy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}