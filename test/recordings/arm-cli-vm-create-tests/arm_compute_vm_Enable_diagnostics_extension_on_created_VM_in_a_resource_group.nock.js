// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"d758b12e-26e7-41ee-9a6f-360552b51d72\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL625\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D2\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"16.04.0-LTS\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli0b136d5d7a22abbd-os-1474081826750\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage14140.blob.core.windows.net/xplatteststoragecnt11815/cli0b136d5d7a22abbd-os-1474081826750.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\",\r\n        \"diskSizeGB\": 1023\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage14140.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3553',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131182099459413847',
  'x-ms-request-id': 'a7231415-ab2d-4f7c-b597-853b3f0eaa01',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '8d192aa2-cf0a-4ec4-9591-f42b7cee38b4',
  'x-ms-routing-request-id': 'WESTUS2:20160917T032830Z:8d192aa2-cf0a-4ec4-9591-f42b7cee38b4',
  date: 'Sat, 17 Sep 2016 03:28:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"d758b12e-26e7-41ee-9a6f-360552b51d72\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL625\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D2\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"16.04.0-LTS\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli0b136d5d7a22abbd-os-1474081826750\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage14140.blob.core.windows.net/xplatteststoragecnt11815/cli0b136d5d7a22abbd-os-1474081826750.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\",\r\n        \"diskSizeGB\": 1023\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage14140.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3553',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131182099459413847',
  'x-ms-request-id': 'a7231415-ab2d-4f7c-b597-853b3f0eaa01',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '8d192aa2-cf0a-4ec4-9591-f42b7cee38b4',
  'x-ms-routing-request-id': 'WESTUS2:20160917T032830Z:8d192aa2-cf0a-4ec4-9591-f42b7cee38b4',
  date: 'Sat, 17 Sep 2016 03:28:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Storage/storageAccounts/xplatteststorage14140/listKeys?api-version=2016-01-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"ctM/4dTEdD3RfTGLVykN+oVTIfvR53fD727rS+Ry+87zOoP6mKG7pN82H2qyDyutplhdfV4nkileS395OYtZkw==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"SxD4QMnVRJfnrmK6iCeRxpGUeRSozB3dCLaFv5sAbt1dkGWa5ZvB9g10CEqzB0PPNKwVCmkWdedHVCIAnCr4Dw==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd7b4e520-3de0-4a33-b9d2-58b878301fd8',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd7b4e520-3de0-4a33-b9d2-58b878301fd8',
  'x-ms-routing-request-id': 'WESTUS2:20160917T032831Z:d7b4e520-3de0-4a33-b9d2-58b878301fd8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 17 Sep 2016 03:28:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Storage/storageAccounts/xplatteststorage14140/listKeys?api-version=2016-01-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"ctM/4dTEdD3RfTGLVykN+oVTIfvR53fD727rS+Ry+87zOoP6mKG7pN82H2qyDyutplhdfV4nkileS395OYtZkw==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"SxD4QMnVRJfnrmK6iCeRxpGUeRSozB3dCLaFv5sAbt1dkGWa5ZvB9g10CEqzB0PPNKwVCmkWdedHVCIAnCr4Dw==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd7b4e520-3de0-4a33-b9d2-58b878301fd8',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd7b4e520-3de0-4a33-b9d2-58b878301fd8',
  'x-ms-routing-request-id': 'WESTUS2:20160917T032831Z:d7b4e520-3de0-4a33-b9d2-58b878301fd8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 17 Sep 2016 03:28:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic?api-version=2016-03-30', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.OSTCExtensions\",\r\n    \"type\": \"LinuxDiagnostic\",\r\n    \"typeHandlerVersion\": \"2.3\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"settings\": {\"xmlCfg\":null,\"ladCfg\":{\"diagnosticMonitorConfiguration\":{\"metrics\":{\"resourceId\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm\",\"metricAggregation\":[{\"scheduledTransferPeriod\":\"PT1H\"},{\"scheduledTransferPeriod\":\"PT1M\"}]},\"performanceCounters\":{\"performanceCounterConfiguration\":[{\"class\":\"Memory\",\"counterSpecifier\":\"PercentAvailableMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"AvailableMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"UsedMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"PercentUsedSwap\",\"table\":\"LinuxMemory\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentProcessorTime\",\"table\":\"LinuxCpu\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentIOWaitTime\",\"table\":\"LinuxCpu\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentIdleTime\",\"table\":\"LinuxCpu\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"AverageWriteTime\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"AverageReadTime\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"ReadBytesPerSecond\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"WriteBytesPerSecond\",\"table\":\"LinuxDisk\"}]}}},\"storageAccount\":\"xplatteststorage14140\"},\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic\",\r\n  \"name\": \"LinuxDiagnostic\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1850',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/bc73e1d2-80c5-403b-8896-584f96659a92?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131182099459413847',
  'x-ms-request-id': 'bc73e1d2-80c5-403b-8896-584f96659a92',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '77b5ae80-1c7d-4c1c-aa32-69f8263a6fd8',
  'x-ms-routing-request-id': 'WESTUS2:20160917T032834Z:77b5ae80-1c7d-4c1c-aa32-69f8263a6fd8',
  date: 'Sat, 17 Sep 2016 03:28:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic?api-version=2016-03-30', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.OSTCExtensions\",\r\n    \"type\": \"LinuxDiagnostic\",\r\n    \"typeHandlerVersion\": \"2.3\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"settings\": {\"xmlCfg\":null,\"ladCfg\":{\"diagnosticMonitorConfiguration\":{\"metrics\":{\"resourceId\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm\",\"metricAggregation\":[{\"scheduledTransferPeriod\":\"PT1H\"},{\"scheduledTransferPeriod\":\"PT1M\"}]},\"performanceCounters\":{\"performanceCounterConfiguration\":[{\"class\":\"Memory\",\"counterSpecifier\":\"PercentAvailableMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"AvailableMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"UsedMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"PercentUsedSwap\",\"table\":\"LinuxMemory\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentProcessorTime\",\"table\":\"LinuxCpu\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentIOWaitTime\",\"table\":\"LinuxCpu\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentIdleTime\",\"table\":\"LinuxCpu\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"AverageWriteTime\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"AverageReadTime\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"ReadBytesPerSecond\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"WriteBytesPerSecond\",\"table\":\"LinuxDisk\"}]}}},\"storageAccount\":\"xplatteststorage14140\"},\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic\",\r\n  \"name\": \"LinuxDiagnostic\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1850',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/bc73e1d2-80c5-403b-8896-584f96659a92?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131182099459413847',
  'x-ms-request-id': 'bc73e1d2-80c5-403b-8896-584f96659a92',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '77b5ae80-1c7d-4c1c-aa32-69f8263a6fd8',
  'x-ms-routing-request-id': 'WESTUS2:20160917T032834Z:77b5ae80-1c7d-4c1c-aa32-69f8263a6fd8',
  date: 'Sat, 17 Sep 2016 03:28:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/bc73e1d2-80c5-403b-8896-584f96659a92?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-09-17T03:28:33.8071721+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"bc73e1d2-80c5-403b-8896-584f96659a92\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131182099459413847',
  'x-ms-request-id': '8ff2ad88-6dde-43cb-b1e3-2e704c7ff2e1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '85859e3d-ab40-445e-a7f7-55d00c76863f',
  'x-ms-routing-request-id': 'CENTRALUS:20160917T032906Z:85859e3d-ab40-445e-a7f7-55d00c76863f',
  date: 'Sat, 17 Sep 2016 03:29:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/bc73e1d2-80c5-403b-8896-584f96659a92?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-09-17T03:28:33.8071721+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"bc73e1d2-80c5-403b-8896-584f96659a92\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131182099459413847',
  'x-ms-request-id': '8ff2ad88-6dde-43cb-b1e3-2e704c7ff2e1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '85859e3d-ab40-445e-a7f7-55d00c76863f',
  'x-ms-routing-request-id': 'CENTRALUS:20160917T032906Z:85859e3d-ab40-445e-a7f7-55d00c76863f',
  date: 'Sat, 17 Sep 2016 03:29:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/bc73e1d2-80c5-403b-8896-584f96659a92?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-09-17T03:28:33.8071721+00:00\",\r\n  \"endTime\": \"2016-09-17T03:29:19.5106604+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"bc73e1d2-80c5-403b-8896-584f96659a92\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131182099459413847',
  'x-ms-request-id': 'faaf2b4d-c183-4c0e-aad4-e4926ffb7620',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '6c546c8f-66c4-4d5d-953b-94410c0cf622',
  'x-ms-routing-request-id': 'CENTRALUS:20160917T032937Z:6c546c8f-66c4-4d5d-953b-94410c0cf622',
  date: 'Sat, 17 Sep 2016 03:29:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/bc73e1d2-80c5-403b-8896-584f96659a92?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-09-17T03:28:33.8071721+00:00\",\r\n  \"endTime\": \"2016-09-17T03:29:19.5106604+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"bc73e1d2-80c5-403b-8896-584f96659a92\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131182099459413847',
  'x-ms-request-id': 'faaf2b4d-c183-4c0e-aad4-e4926ffb7620',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '6c546c8f-66c4-4d5d-953b-94410c0cf622',
  'x-ms-routing-request-id': 'CENTRALUS:20160917T032937Z:6c546c8f-66c4-4d5d-953b-94410c0cf622',
  date: 'Sat, 17 Sep 2016 03:29:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.OSTCExtensions\",\r\n    \"type\": \"LinuxDiagnostic\",\r\n    \"typeHandlerVersion\": \"2.3\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"settings\": {\"xmlCfg\":null,\"ladCfg\":{\"diagnosticMonitorConfiguration\":{\"metrics\":{\"resourceId\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm\",\"metricAggregation\":[{\"scheduledTransferPeriod\":\"PT1H\"},{\"scheduledTransferPeriod\":\"PT1M\"}]},\"performanceCounters\":{\"performanceCounterConfiguration\":[{\"class\":\"Memory\",\"counterSpecifier\":\"PercentAvailableMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"AvailableMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"UsedMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"PercentUsedSwap\",\"table\":\"LinuxMemory\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentProcessorTime\",\"table\":\"LinuxCpu\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentIOWaitTime\",\"table\":\"LinuxCpu\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentIdleTime\",\"table\":\"LinuxCpu\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"AverageWriteTime\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"AverageReadTime\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"ReadBytesPerSecond\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"WriteBytesPerSecond\",\"table\":\"LinuxDisk\"}]}}},\"storageAccount\":\"xplatteststorage14140\"},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic\",\r\n  \"name\": \"LinuxDiagnostic\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1851',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131182099459413847',
  'x-ms-request-id': '33c28327-6310-46fc-b608-c8f9969697fc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '323c0143-d8b0-435b-bf43-556aaa74e727',
  'x-ms-routing-request-id': 'CENTRALUS:20160917T032939Z:323c0143-d8b0-435b-bf43-556aaa74e727',
  date: 'Sat, 17 Sep 2016 03:29:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.OSTCExtensions\",\r\n    \"type\": \"LinuxDiagnostic\",\r\n    \"typeHandlerVersion\": \"2.3\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"settings\": {\"xmlCfg\":null,\"ladCfg\":{\"diagnosticMonitorConfiguration\":{\"metrics\":{\"resourceId\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm\",\"metricAggregation\":[{\"scheduledTransferPeriod\":\"PT1H\"},{\"scheduledTransferPeriod\":\"PT1M\"}]},\"performanceCounters\":{\"performanceCounterConfiguration\":[{\"class\":\"Memory\",\"counterSpecifier\":\"PercentAvailableMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"AvailableMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"UsedMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"PercentUsedSwap\",\"table\":\"LinuxMemory\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentProcessorTime\",\"table\":\"LinuxCpu\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentIOWaitTime\",\"table\":\"LinuxCpu\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentIdleTime\",\"table\":\"LinuxCpu\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"AverageWriteTime\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"AverageReadTime\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"ReadBytesPerSecond\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"WriteBytesPerSecond\",\"table\":\"LinuxDisk\"}]}}},\"storageAccount\":\"xplatteststorage14140\"},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate8473/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic\",\r\n  \"name\": \"LinuxDiagnostic\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1851',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131182099459413847',
  'x-ms-request-id': '33c28327-6310-46fc-b608-c8f9969697fc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '323c0143-d8b0-435b-bf43-556aaa74e727',
  'x-ms-routing-request-id': 'CENTRALUS:20160917T032939Z:323c0143-d8b0-435b-bf43-556aaa74e727',
  date: 'Sat, 17 Sep 2016 03:29:38 GMT',
  connection: 'close' });
 return result; }]];
