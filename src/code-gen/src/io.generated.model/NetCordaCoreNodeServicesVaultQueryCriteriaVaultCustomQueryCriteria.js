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
import NetCordaCoreIdentityAbstractParty from './NetCordaCoreIdentityAbstractParty';
import NetCordaCoreNodeServicesVaultConstraintInfo from './NetCordaCoreNodeServicesVaultConstraintInfo';
import NetCordaCoreNodeServicesVaultQueryCriteria from './NetCordaCoreNodeServicesVaultQueryCriteria';
import NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf from './NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf';

/**
 * The NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria model module.
 * @module io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria
 * @version 1.0.0
 */
class NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria {
    /**
     * Constructs a new <code>NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria</code>.
     * @alias module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria
     * @extends 
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteria
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteria
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteria
     * @implements module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteria
     */
    constructor() { 
        NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf.initialize(this);
        NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['expression'] = expression;
        obj['status'] = status;
        obj['relevancyStatus'] = relevancyStatus;
        obj['constraintTypes'] = constraintTypes;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria} The populated <code>NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria();

            ApiClient.constructFromObject(data, obj, '');
            
            NetCordaCoreNodeServicesVaultQueryCriteria.constructFromObject(data, obj);
            NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf.constructFromObject(data, obj);
            NetCordaCoreNodeServicesVaultQueryCriteria.constructFromObject(data, obj);
            NetCordaCoreNodeServicesVaultQueryCriteria.constructFromObject(data, obj);
            NetCordaCoreNodeServicesVaultQueryCriteria.constructFromObject(data, obj);

            if (data.hasOwnProperty('expression')) {
                obj['expression'] = ApiClient.convertToType(data['expression'], Object);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('contractStateTypes')) {
                obj['contractStateTypes'] = ApiClient.convertToType(data['contractStateTypes'], ['String']);
            }
            if (data.hasOwnProperty('relevancyStatus')) {
                obj['relevancyStatus'] = ApiClient.convertToType(data['relevancyStatus'], 'String');
            }
            if (data.hasOwnProperty('constraintTypes')) {
                obj['constraintTypes'] = ApiClient.convertToType(data['constraintTypes'], ['String']);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], [NetCordaCoreNodeServicesVaultConstraintInfo]);
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [NetCordaCoreIdentityAbstractParty]);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} expression
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria.prototype['expression'] = undefined;

/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria.StatusEnum} status
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria.prototype['status'] = undefined;

/**
 * @member {Array.<String>} contractStateTypes
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria.prototype['contractStateTypes'] = undefined;

/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria.RelevancyStatusEnum} relevancyStatus
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria.prototype['relevancyStatus'] = undefined;

/**
 * @member {Array.<module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria.ConstraintTypesEnum>} constraintTypes
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria.prototype['constraintTypes'] = undefined;

/**
 * @member {Array.<module:io.generated.model/NetCordaCoreNodeServicesVaultConstraintInfo>} constraints
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria.prototype['constraints'] = undefined;

/**
 * @member {Array.<module:io.generated.model/NetCordaCoreIdentityAbstractParty>} participants
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria.prototype['participants'] = undefined;


// Implement NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf interface:
/**
 * @member {Object} expression
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf.prototype['expression'] = undefined;
/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf.StatusEnum} status
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf.prototype['status'] = undefined;
/**
 * @member {Array.<String>} contractStateTypes
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf.prototype['contractStateTypes'] = undefined;
/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf.RelevancyStatusEnum} relevancyStatus
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf.prototype['relevancyStatus'] = undefined;
/**
 * @member {Array.<module:io.generated.model/NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf.ConstraintTypesEnum>} constraintTypes
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf.prototype['constraintTypes'] = undefined;
/**
 * @member {Array.<module:io.generated.model/NetCordaCoreNodeServicesVaultConstraintInfo>} constraints
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf.prototype['constraints'] = undefined;
/**
 * @member {Array.<module:io.generated.model/NetCordaCoreIdentityAbstractParty>} participants
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteriaAllOf.prototype['participants'] = undefined;



/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria['StatusEnum'] = {

    /**
     * value: "UNCONSUMED"
     * @const
     */
    "UNCONSUMED": "UNCONSUMED",

    /**
     * value: "CONSUMED"
     * @const
     */
    "CONSUMED": "CONSUMED",

    /**
     * value: "ALL"
     * @const
     */
    "ALL": "ALL"
};


/**
 * Allowed values for the <code>relevancyStatus</code> property.
 * @enum {String}
 * @readonly
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria['RelevancyStatusEnum'] = {

    /**
     * value: "RELEVANT"
     * @const
     */
    "RELEVANT": "RELEVANT",

    /**
     * value: "NOT_RELEVANT"
     * @const
     */
    "NOT_RELEVANT": "NOT_RELEVANT",

    /**
     * value: "ALL"
     * @const
     */
    "ALL": "ALL"
};


/**
 * Allowed values for the <code>constraintTypes</code> property.
 * @enum {String}
 * @readonly
 */
NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria['ConstraintTypesEnum'] = {

    /**
     * value: "ALWAYS_ACCEPT"
     * @const
     */
    "ALWAYS_ACCEPT": "ALWAYS_ACCEPT",

    /**
     * value: "HASH"
     * @const
     */
    "HASH": "HASH",

    /**
     * value: "CZ_WHITELISTED"
     * @const
     */
    "CZ_WHITELISTED": "CZ_WHITELISTED",

    /**
     * value: "SIGNATURE"
     * @const
     */
    "SIGNATURE": "SIGNATURE"
};



export default NetCordaCoreNodeServicesVaultQueryCriteriaVaultCustomQueryCriteria;

