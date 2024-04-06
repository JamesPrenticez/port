# How To Deploy an App in Azure using MSAL Authentication
Note: this example is for another project the "Workbench" - Mertle uses 2 seperate app registrations for frontend/backend - this example just uses one

### Overview

1. Datacom internal service desk
2. Set Up App Registrations
3. Create & Deploy Static Web App
4. Create & Deploy Serverless Function
5. Enviroment Variables

### 1. Datacom internal service desk

First you must create the following ticket:

Subject: Azure App Registrations and Resource Group

Hello,

I am working on a new project and need the following created in Azure with owner permission assigned to myself.

Applicaiton Registration (x2)

1. Workbench (UAT)
2. Workbench (Prod)

Resource Group

1. RG - Workbench

### 2. Set Up App Registration

#### 2.1 Enable OAUTH 2.0

Step 1: We need to go to the manifest so that we can issue OAUTH v2.0 JWT Tokens
![appreg_manifest.png](/.attachments/appreg_manifest-4ac8e32b-70a3-4d72-9353-a50aea8eb008.png)

```json
	"accessTokenAcceptedVersion": 2,
```

[https://learn.microsoft.com/en-us/azure/active-directory/develop/reference-app-manifest#accesstokenacceptedversion-attribute]

#### 2.2 Expose and API and Configure Claims

Step 1: We need to create a scope for when our users connect via oauth - this can be used to handle permission however we are just going to create a generic scope for all users and admins.
![appreg_expose_api_1.png](/.attachments/appreg_expose_api_1-57d78fdb-ac40-4226-8bbd-65f8a4ff4af9.png)

Step 2:
![appreg_expose_api_2.png](/.attachments/appreg_expose_api_2-24622bcd-6bbd-4694-9cae-5a8123e63eda.png)

Step 3: Now we need to allow requests from our client to our API... in this case our static web app and serverless function sit in the same place so its just a circular reference.. Head over to the overview and copy the client id. For Mertle 2 we would need to get the frontend app reg client id.
![appreg_expose_api_3.png](/.attachments/appreg_expose_api_3-5f84f35c-d0cc-4889-b99a-82794f5bedca.png)

Step 4: Head back to expose and api and add a client application
![appreg_expose_api_4.png](/.attachments/appreg_expose_api_4-9d118511-3f09-4818-9966-506d14af11ca.png)

https://learn.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims

#### 2.3 API Permissions 

Step 1: We now need to give our newly exposed api some permissions, firstly we allow acces to our scope  
![appreg_api_permissions_1.png](/.attachments/appreg_api_permissions_1-07af0ff0-cc47-4180-a6f5-f4545e9e30e0.png)

Step 2:
![appreg_api_permissions_2.png](/.attachments/appreg_api_permissions_2-2bc14306-673a-49ab-9739-2158edb144db.png)

Step 3: Secondly we need to give our api access to microsoft graph so that we can read user details from AAD
![appreg_api_permissions_3.png](/.attachments/appreg_api_permissions_3-cbbfdcc3-6c84-4390-a074-2e535994ca7c.png)

Step 4:
![appreg_api_permissions_4.png](/.attachments/appreg_api_permissions_4-5753755f-24ea-4791-8b92-a3c2b0f9c696.png)

Step 5:
![appreg_api_permissions_5.png](/.attachments/appreg_api_permissions_5-c92dc377-bac7-493c-bfbb-61572d8b36e9.png)

#### 2.5 Authentication - (Call back URIS)

**NOTE: We need to come back here to add our static web app url but for now we are just going to allow for localhost**

Step 1: Add a new platform and in our case it will be a SPA for react.
![appreg_auth_1.png](/.attachments/appreg_auth_1-9c1fe0d9-b225-4304-ac31-9394c756a2c3.png)

Step 2: Provide http://localhost:3000/ and http://localhost:3000/logout for local development
![appreg_auth_2.png](/.attachments/appreg_auth_2-40f7498c-81aa-4f4c-b804-950f0e9decd1.png)

Step 3: After you have created your static web app and got the url you can come back here and add it.
![appreg_auth_3.png](/.attachments/appreg_auth_3-4a80664d-ae58-4706-a9bf-b827e9ac64ac.png)

#### 2.6 Client Secret

Step 1: The last thing to do is create a secret we will use as an enviroment variable in the backend
![appreg_secret_1.png](/.attachments/appreg_secret_1-f14642b4-b203-4345-839a-1270c4af4113.png)

Step 2: Make sure to copy it otherwise you need to delete it and create a new one.
![appreg_secret_2.png](/.attachments/appreg_secret_2-86c54f8e-3c74-4858-a7d1-be3abf9612bb.png)

### 3. Static Web App
Step 1: Create a new resouce and enter the following details
![static_web_app_1.png](/.attachments/static_web_app_1-ce81311a-33bd-42be-9bd2-a3d0ed44f920.png)

Step 2:
![static_web_app_2.png](/.attachments/static_web_app_2-fe846316-4f78-490f-9eb7-f07059e52513.png)

Step 3: // TODO DEPLOYMNET add a picture for the automatic deployment that happens here

### 4. Serverless Function (this step is for a Python Backend... Mertle 2 uses .net)

Step 1: Again pretty straight foward just create a resource and enter the deatils
![serverless_function.png](/.attachments/serverless_function-d7fc3d0f-2ac7-4400-bd46-4c1991f3da77.png)

In an ideal world we would create a deployment pipeline for the backend.... however we need permissions to do this... So... instead we are just going to push from VSCode.

Step 2: Inside VSCode Make sure you have the Azure Extension
![serverless_function_CORS.png](/.attachments/serverless_function_CORS-e461443f-f503-419a-8583-a9af6e6204cf.png)

Step 3:
![serverless_function_deploy_3.png](/.attachments/serverless_function_deploy_3-2d4b991f-82c3-4bcf-a598-5e9fb4d85532.png)

Step 4:
![serverless_function_deploy_4.png](/.attachments/serverless_function_deploy_4-283da980-f26b-45b3-9e87-85a091d414c1.png)

Step 5:
![serverless_function_deploy_5.png](/.attachments/serverless_function_deploy_5-80a7c5a8-cbde-4d6b-a1e7-b9358210f95b.png)

Step 6:
[![Serverless Function Deployment](./images/serverless_function_5.png =1100x)](./images/serverless_function_5.png)

Step 7: Vist your URL
(workbench-be)[https://workbench-be.azurewebsites.net/]

### 6. Enable CORS fro the backend

Step 1: An important step and a gotcha is to enable CORS for our serverless function
[![Serverless Function CORS](./images/serverless_function_CORS.png =1100x)](./images/serverless_function_CORS.png)

### 5. Enviroment Variables

### Backend

Step 1: Starting with our backend we need to add the following enviroment variables to Azure.
[x] CONNECTION_STRING
[x] ENVIROMENT
[x] FLASK_APP
[x] FLASK_DEBUG
[x] SECRET_KEY (not the MSAL one just some randoms chars)
[x] MSAL_CLIENT_ID
[x] MSAL_CLIENT_SECRET
[x] MSAL_TENANT_ID
[x] MSAL_SCOPE
[x] MSAL_ENDPOINT

![env_backend_1.png](/.attachments/env_backend_1-72962f1e-6df3-4bd8-91d6-1ed3af9c696b.png)

Step 2: Make sure to save
![env_backend_2.png](/.attachments/env_backend_2-f0c2e91c-9ca1-4683-8a12-2cd350180896.png)

### Frontend
Step 1: Head over to ADO and go to the library
![env_frontend_1.png](/.attachments/env_frontend_1-a9aa77d4-afcc-4ad1-870e-41bdf961a286.png)

Step 2:
![env_frontend_2.png](/.attachments/env_frontend_2-6e493401-c4bd-4166-9fb4-4d95a61663a2.png)

[x] VITE_CLIENT_ID
[x] VITE_AUTHORITY
[x] VITE_REDIRECT_URI
[x] VITE_SCOPES
[x] VITE_BASE_URL
[x] VITE_BASE_URL_API
[x] VITE_ENVIRONMENT
[x] VITE_USE_MOCK_DATA

Step 3:
![env_frontend_3.png](/.attachments/env_frontend_3-1421222f-a616-423d-89ec-f1b2baa4624a.png)

Step 4: We head over to our pipeline and edit it to include the enviroment variables
![env_frontend_4.png](/.attachments/env_frontend_4-6864ae11-787a-4a86-adca-86e7c5ca2859.png)

CONGRATULATIONS ! You are all setup.
