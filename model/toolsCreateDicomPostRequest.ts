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
export interface ToolsCreateDicomPostRequest { 
    /**
     * This field can be used to embed an image (pixel data encoded as PNG or JPEG), a PDF, or a 3D manufactoring model (MTL/OBJ/STL) inside the created DICOM instance. The file to be encapsulated must be provided using its [data URI scheme encoding](https://en.wikipedia.org/wiki/Data_URI_scheme). This field can possibly contain a JSON array, in which case a DICOM series is created containing one DICOM instance for each item in the `Content` field.
     */
    Content?: string;
    /**
     * Avoid the consistency checks for the DICOM tags that enforce the DICOM model of the real-world. You can notably use this flag if you need to manually set the tags `StudyInstanceUID`, `SeriesInstanceUID`, or `SOPInstanceUID`. Be careful with this feature.
     */
    Force?: boolean;
    /**
     * If some value in the `Tags` associative array is formatted according to some [data URI scheme encoding](https://en.wikipedia.org/wiki/Data_URI_scheme), whether this value is decoded to a binary value or kept as such (`true` by default)
     */
    InterpretBinaryTags?: boolean;
    /**
     * If present, the newly created instance will be attached to the parent DICOM resource whose Orthanc identifier is contained in this field. The DICOM tags of the parent modules in the DICOM hierarchy will be automatically copied to the newly created instance.
     */
    Parent?: string;
    /**
     * The private creator to be used for private tags in `Tags`
     */
    PrivateCreator?: string;
    /**
     * Associative array containing the tags of the new instance to be created
     */
    Tags?: object;
}
