// *** WARNING: this file was generated by the Lumi IDL Compiler (LUMIDL). ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

import {Object} from "../s3/object";

export class RestAPI extends lumi.Resource implements RestAPIArgs {
    public readonly name: string;
    public body?: any;
    public bodyS3Location?: S3Location;
    public cloneFrom?: RestAPI;
    public description?: string;
    public failOnWarnings?: boolean;
    public apiName?: string;
    public parameters?: string[];
    public id: string;
    public createdDate: string;
    public version: string;
    public warnings: string[];
    public binaryMediaTypes: string[];

    constructor(name: string, args?: RestAPIArgs) {
        super();
        if (name === undefined) {
            throw new Error("Missing required resource name");
        }
        this.name = name;
        if (args !== undefined) {
            this.body = args.body;
            this.bodyS3Location = args.bodyS3Location;
            this.cloneFrom = args.cloneFrom;
            this.description = args.description;
            this.failOnWarnings = args.failOnWarnings;
            this.apiName = args.apiName;
            this.parameters = args.parameters;
        }
    }
}

export interface RestAPIArgs {
    body?: any;
    bodyS3Location?: S3Location;
    cloneFrom?: RestAPI;
    description?: string;
    failOnWarnings?: boolean;
    apiName?: string;
    parameters?: string[];
}

export interface S3Location {
    object: Object;
    etag?: string;
    version?: string;
}


