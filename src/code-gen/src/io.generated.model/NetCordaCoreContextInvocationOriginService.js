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

import ApiClient from '../ApiClient';

/**
 * The NetCordaCoreContextInvocationOriginService model module.
 * @module io.generated.model/NetCordaCoreContextInvocationOriginService
 * @version 1.0.0
 */
class NetCordaCoreContextInvocationOriginService {
    /**
     * Constructs a new <code>NetCordaCoreContextInvocationOriginService</code>.
     * @alias module:io.generated.model/NetCordaCoreContextInvocationOriginService
     * @param serviceClassName {String} 
     * @param owningLegalIdentity {String} CordaX500Name encoded Party
     */
    constructor(serviceClassName, owningLegalIdentity) { 
        
        NetCordaCoreContextInvocationOriginService.initialize(this, serviceClassName, owningLegalIdentity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, serviceClassName, owningLegalIdentity) { 
        obj['serviceClassName'] = serviceClassName;
        obj['owningLegalIdentity'] = owningLegalIdentity;
    }

    /**
     * Constructs a <code>NetCordaCoreContextInvocationOriginService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreContextInvocationOriginService} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreContextInvocationOriginService} The populated <code>NetCordaCoreContextInvocationOriginService</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreContextInvocationOriginService();

            if (data.hasOwnProperty('serviceClassName')) {
                obj['serviceClassName'] = ApiClient.convertToType(data['serviceClassName'], 'String');
            }
            if (data.hasOwnProperty('owningLegalIdentity')) {
                obj['owningLegalIdentity'] = ApiClient.convertToType(data['owningLegalIdentity'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} serviceClassName
 */
NetCordaCoreContextInvocationOriginService.prototype['serviceClassName'] = undefined;

/**
 * CordaX500Name encoded Party
 * @member {String} owningLegalIdentity
 */
NetCordaCoreContextInvocationOriginService.prototype['owningLegalIdentity'] = undefined;






export default NetCordaCoreContextInvocationOriginService;

