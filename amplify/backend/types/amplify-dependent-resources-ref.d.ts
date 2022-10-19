export type AmplifyDependentResourcesAttributes = {
    "function": {
        "awsNextAmplifyFunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "awsNextAmplifyBackend": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}