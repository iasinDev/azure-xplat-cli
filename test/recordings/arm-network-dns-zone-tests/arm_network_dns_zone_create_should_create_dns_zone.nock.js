// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-dns-zone?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-dns-zone' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-request-id': '8e0c9136-fbf3-4c8e-8837-76993471fd48',
  'x-ms-correlation-request-id': '8e0c9136-fbf3-4c8e-8837-76993471fd48',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T123937Z:8e0c9136-fbf3-4c8e-8837-76993471fd48',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 12:39:36 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-dns-zone?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-dns-zone' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-request-id': '8e0c9136-fbf3-4c8e-8837-76993471fd48',
  'x-ms-correlation-request-id': '8e0c9136-fbf3-4c8e-8837-76993471fd48',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T123937Z:8e0c9136-fbf3-4c8e-8837-76993471fd48',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 12:39:36 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-dns-zone?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone\",\"name\":\"xplat-test-dns-zone\",\"location\":\"southeastasia\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '208',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': '5e75f2f3-ce30-4b93-bbc3-aa7d4826df4c',
  'x-ms-correlation-request-id': '5e75f2f3-ce30-4b93-bbc3-aa7d4826df4c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T123940Z:5e75f2f3-ce30-4b93-bbc3-aa7d4826df4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 12:39:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-dns-zone?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone\",\"name\":\"xplat-test-dns-zone\",\"location\":\"southeastasia\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '208',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': '5e75f2f3-ce30-4b93-bbc3-aa7d4826df4c',
  'x-ms-correlation-request-id': '5e75f2f3-ce30-4b93-bbc3-aa7d4826df4c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T123940Z:5e75f2f3-ce30-4b93-bbc3-aa7d4826df4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 12:39:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-1776-a76af201d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '493',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-1776-a76af201d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3ce63c37-bb69-48e5-8f03-5fe9ce6c42d2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'd0e161fd-66d0-461a-a64e-808bfc4591fd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T123946Z:d0e161fd-66d0-461a-a64e-808bfc4591fd',
  date: 'Mon, 29 Aug 2016 12:39:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-1776-a76af201d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '493',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-1776-a76af201d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3ce63c37-bb69-48e5-8f03-5fe9ce6c42d2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'd0e161fd-66d0-461a-a64e-808bfc4591fd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T123946Z:d0e161fd-66d0-461a-a64e-808bfc4591fd',
  date: 'Mon, 29 Aug 2016 12:39:45 GMT',
  connection: 'close' });
 return result; }]];
