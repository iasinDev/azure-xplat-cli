// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .put('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup8671/providers/Microsoft.Batch/batchAccounts/armclibatch6657/applications/armclibatchapp6809/versions/1.0?api-version=2015-12-01')
  .reply(201, "{\"id\":\"armclibatchapp6809\",\"version\":\"1.0\",\"storageUrl\":\"https://armclibatch265.blob.core.windows.net/app-armclibatchapp6809-fc216102dec99be8888aa6a5f3ede28930fd7155/armclibatchapp6809-1.0-23ab7e39-d95e-4012-a6d9-f3d0c089c25c?sv=2015-04-05&sr=b&sig=K4dSP%2FQNyNHZii4%2B93LXy8gsuPrnjMEkxtrLHYGz8jo%3D&st=2016-10-04T22%3A29%3A54Z&se=2016-10-05T02%3A34%3A54Z&sp=rw\",\"storageUrlExpiry\":\"2016-10-05T02:34:54.5340659Z\",\"state\":\"pending\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '63d85ca3-851a-46ec-9cf9-08a02411c91d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'fe1e2ba7-791c-41dc-8732-42a92f68f6ef',
  'x-ms-correlation-request-id': 'fe1e2ba7-791c-41dc-8732-42a92f68f6ef',
  'x-ms-routing-request-id': 'WESTUS2:20161004T223455Z:fe1e2ba7-791c-41dc-8732-42a92f68f6ef',
  date: 'Tue, 04 Oct 2016 22:34:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup8671/providers/Microsoft.Batch/batchAccounts/armclibatch6657/applications/armclibatchapp6809/versions/1.0?api-version=2015-12-01')
  .reply(201, "{\"id\":\"armclibatchapp6809\",\"version\":\"1.0\",\"storageUrl\":\"https://armclibatch265.blob.core.windows.net/app-armclibatchapp6809-fc216102dec99be8888aa6a5f3ede28930fd7155/armclibatchapp6809-1.0-23ab7e39-d95e-4012-a6d9-f3d0c089c25c?sv=2015-04-05&sr=b&sig=K4dSP%2FQNyNHZii4%2B93LXy8gsuPrnjMEkxtrLHYGz8jo%3D&st=2016-10-04T22%3A29%3A54Z&se=2016-10-05T02%3A34%3A54Z&sp=rw\",\"storageUrlExpiry\":\"2016-10-05T02:34:54.5340659Z\",\"state\":\"pending\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '63d85ca3-851a-46ec-9cf9-08a02411c91d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'fe1e2ba7-791c-41dc-8732-42a92f68f6ef',
  'x-ms-correlation-request-id': 'fe1e2ba7-791c-41dc-8732-42a92f68f6ef',
  'x-ms-routing-request-id': 'WESTUS2:20161004T223455Z:fe1e2ba7-791c-41dc-8732-42a92f68f6ef',
  date: 'Tue, 04 Oct 2016 22:34:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://armclibatch265.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/app-armclibatchapp6809-fc216102dec99be8888aa6a5f3ede28930fd7155/armclibatchapp6809-1.0-23ab7e39-d95e-4012-a6d9-f3d0c089c25c?sv=2015-04-05&sr=b&sig=K4dSP%2FQNyNHZii4%2B93LXy8gsuPrnjMEkxtrLHYGz8jo%3D&st=2016-10-04T22%3A29%3A54Z&se=2016-10-05T02%3A34%3A54Z&sp=rw&api-version=2015-12-11', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aegW9zT5QEn52baYgZAWKQ==',
  'last-modified': 'Tue, 04 Oct 2016 22:34:55 GMT',
  etag: '"0x8D3ECA6AA8640A1"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '600b82a3-0001-00e4-4b8f-1e47de000000',
  'x-ms-version': '2015-12-11',
  'x-ms-request-server-encrypted': 'false',
  date: 'Tue, 04 Oct 2016 22:34:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://armclibatch265.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/app-armclibatchapp6809-fc216102dec99be8888aa6a5f3ede28930fd7155/armclibatchapp6809-1.0-23ab7e39-d95e-4012-a6d9-f3d0c089c25c?sv=2015-04-05&sr=b&sig=K4dSP%2FQNyNHZii4%2B93LXy8gsuPrnjMEkxtrLHYGz8jo%3D&st=2016-10-04T22%3A29%3A54Z&se=2016-10-05T02%3A34%3A54Z&sp=rw&api-version=2015-12-11', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aegW9zT5QEn52baYgZAWKQ==',
  'last-modified': 'Tue, 04 Oct 2016 22:34:55 GMT',
  etag: '"0x8D3ECA6AA8640A1"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '600b82a3-0001-00e4-4b8f-1e47de000000',
  'x-ms-version': '2015-12-11',
  'x-ms-request-server-encrypted': 'false',
  date: 'Tue, 04 Oct 2016 22:34:56 GMT',
  connection: 'close' });
 return result; }]];