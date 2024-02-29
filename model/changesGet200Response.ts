/**
 * Orthanc API
 * This is the full documentation of the [REST API](https://orthanc.uclouvain.be/book/users/rest.html) of Orthanc.<p>This reference is automatically generated from the source code of Orthanc. A [shorter cheat sheet](https://orthanc.uclouvain.be/book/users/rest-cheatsheet.html) is part of the Orthanc Book.<p>An earlier, manually crafted version from August 2019, is [still available](2019-08-orthanc-openapi.html), but is not up-to-date anymore ([source](https://groups.google.com/g/orthanc-users/c/NUiJTEICSl8/m/xKeqMrbqAAAJ)).
 *
 * The version of the OpenAPI document: 1.12.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The list of changes
 */
export interface ChangesGet200Response { 
    /**
     * The individual changes
     */
    Changes?: Array<object>;
    /**
     * Whether the last reported change is the last of the full history
     */
    Done?: boolean;
    /**
     * The index of the last reported change, can be used for the `since` argument in subsequent calls to this route
     */
    Last?: number;
}

