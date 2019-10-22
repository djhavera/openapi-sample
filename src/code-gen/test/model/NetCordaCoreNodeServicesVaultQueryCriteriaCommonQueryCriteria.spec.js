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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenapiJsClient);
  }
}(this, function(expect, OpenapiJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenapiJsClient.NetCordaCoreNodeServicesVaultQueryCriteriaCommonQueryCriteria();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NetCordaCoreNodeServicesVaultQueryCriteriaCommonQueryCriteria', function() {
    it('should create an instance of NetCordaCoreNodeServicesVaultQueryCriteriaCommonQueryCriteria', function() {
      // uncomment below and update the code to test NetCordaCoreNodeServicesVaultQueryCriteriaCommonQueryCriteria
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultQueryCriteriaCommonQueryCriteria();
      //expect(instance).to.be.a(OpenapiJsClient.NetCordaCoreNodeServicesVaultQueryCriteriaCommonQueryCriteria);
    });

    it('should have the property relevancyStatus (base name: "relevancyStatus")', function() {
      // uncomment below and update the code to test the property relevancyStatus
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultQueryCriteriaCommonQueryCriteria();
      //expect(instance).to.be();
    });

    it('should have the property constraintTypes (base name: "constraintTypes")', function() {
      // uncomment below and update the code to test the property constraintTypes
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultQueryCriteriaCommonQueryCriteria();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultQueryCriteriaCommonQueryCriteria();
      //expect(instance).to.be();
    });

    it('should have the property participants (base name: "participants")', function() {
      // uncomment below and update the code to test the property participants
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultQueryCriteriaCommonQueryCriteria();
      //expect(instance).to.be();
    });

    it('should have the property contractStateTypes (base name: "contractStateTypes")', function() {
      // uncomment below and update the code to test the property contractStateTypes
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultQueryCriteriaCommonQueryCriteria();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultQueryCriteriaCommonQueryCriteria();
      //expect(instance).to.be();
    });

  });

}));
