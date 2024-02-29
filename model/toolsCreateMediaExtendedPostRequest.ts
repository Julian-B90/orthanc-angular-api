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
 * 
 */
export interface ToolsCreateMediaExtendedPostRequest { 
    /**
     * If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.
     */
    Asynchronous?: boolean;
    /**
     * If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `true`.
     */
    Extended?: boolean;
    /**
     * In asynchronous mode, the priority of the job. The lower the value, the higher the priority.
     */
    Priority?: number;
    /**
     * The list of Orthanc identifiers of interest.
     */
    Resources?: Array<string>;
    /**
     * If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option \"SynchronousZipStream\" is set to \"false\", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.
     */
    Synchronous?: boolean;
    /**
     * If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://orthanc.uclouvain.be/book/faq/transcoding.html
     */
    Transcode?: string;
}
