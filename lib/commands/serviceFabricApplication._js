/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var utils = require('../util/utils');
var serviceFabricUtils = require('./serviceFabricUtils');
var serviceFabricClient = require('azure-servicefabric');
var $ = utils.getLocaleString;


exports.init = function (cli) {
  var log = cli.output;
  
  var serviceFabric = cli.category('servicefabric')
    .description($('Commands to manage your Azure Service Fabric'));
  
  var application = serviceFabric.category('application')
    .description($('Commands to manage your application'));
  
  application.command('show [applicationName]')
    .description($('Show application'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('-s --select <fields>', $('select fields to show'))
    .execute(function (applicationName, options, _) {
      var progress = cli.interaction.progress($('Show application'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        applicationName = serviceFabricUtils.parseUrl(applicationName, _);
        var res = null;
        if (!applicationName) {
          res = client.applications.list(options, _);
        }
        else {
          res = client.applications.get(applicationName, options, _);
        }
        if (options.select) {
          res = serviceFabricUtils.pick(res, options.select, _);
        }
        serviceFabricUtils.setApplicationEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  application.command('create [applicationName] [applicationTypeName] [applicationTypeVersion] [applicationParameter]')
    .description($('Create application, Example: azure servicefabric application create --application-name fabric:/app --application-type-name type1 --application-type-version 1.0'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('--application-type-name <applicationTypeName>', $('the name of the application type'))
    .option('--application-type-version <applicationTypeVersion>', $('the version of the application type'))
    .option('--application-parameter <applicationParameter>', $('the parameter of the application'))
    .execute(function (applicationName, applicationTypeName, applicationTypeVersion, applicationParameter, options, _) {
      var progress = cli.interaction.progress($('Create application'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        var applicationDescription = {};
        if (applicationName) applicationDescription.name = applicationName;
        if (applicationTypeName) applicationDescription.typeName = applicationTypeName;
        if (applicationTypeVersion) applicationDescription.typeVersion = applicationTypeVersion;
        if (applicationParameter) applicationDescription.parameterList = JSON.parse(applicationParameter);
        var res = client.applications.create(applicationDescription, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  application.command('remove [applicationName]')
    .description($('Remove application'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .execute(function (applicationName, options, _) {
      var progress = cli.interaction.progress($('Remove application'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        applicationName = serviceFabricUtils.parseUrl(applicationName, _);
        var res = client.applications.remove(applicationName, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  var applicationManifest = application.category('manifest')
    .description($('Commands to manage your application manifest'));
  
  applicationManifest.command('show [applicationTypeName] [applicationTypeVersion]')
    .description($('Show application manifest'))
    .option('--application-type-name <applicationTypeName>', $('the name of the application type'))
    .option('--application-type-version <applicationTypeVersion>', $('the type of the application version'))
    .execute(function (applicationTypeName, applicationTypeVersion, options, _) {
      var progress = cli.interaction.progress($('Show application manifest'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        var res = client.applicationManifests.get(applicationTypeName, applicationTypeVersion, options, _);
        serviceFabricUtils.setApplicationEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  var applicationType  = application.category('type')
    .description($('Commands to manage your application type'));
  
  applicationType.command('show [applicationTypeName]')
    .description($('Show application type, Example: azure servicefabric application type show --application-type-name type1'))
    .option('--application-type-name <applicationTypeName>', $('the type of the application'))
    .option('-s --select <fields>', $('select fields to show'))
    .execute(function (applicationTypeName, options, _) {
      var progress = cli.interaction.progress($('Show application type'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        var res = null;
        if (!applicationTypeName) {
          res = client.applicationTypes.list(options, _);
        }
        else {
          res = client.applicationTypes.get(applicationTypeName, options, _);
        }
        if (options.select) {
          res = serviceFabricUtils.pick(res, options.select, _);
        }
        serviceFabricUtils.setApplicationEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  applicationType.command('register [applicationTypeBuildPath]')
    .description($('Register application type, Example: azure servicefabric application type register --application-type-build-path Package1'))
    .option('--application-type-build-path <applicationTypeBuildPath>', $('the path of the application type build'))
    .execute(function (applicationTypeBuildPath, options, _) {
      applicationTypeBuildPath = cli.interaction.promptIfNotGiven('applicationTypeBuildPath: ', applicationTypeBuildPath, _);
      
      var progress = cli.interaction.progress($('Register application type'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        var registerApplicationType = {};
        registerApplicationType.applicationTypeBuildPath = applicationTypeBuildPath;
        var res = client.applicationTypes.register(registerApplicationType, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  applicationType.command('unregister [applicationTypeName] [applicationTypeVersion]')
    .description($('Unregister application type, Example: azure servicefabric application type unregister --application-type-name type1 --application-type-version 1.0'))
    .option('--application-type-name <applicationTypeName>', $('the name of the application type'))
    .option('--application-type-version <applicationTypeVersion>', $('the version of the application type'))
    .execute(function (applicationTypeName, applicationTypeVersion, options, _) {
      applicationTypeName = cli.interaction.promptIfNotGiven('applicationTypeName:', applicationTypeName, _);
      applicationTypeVersion = cli.interaction.promptIfNotGiven('applicationTypeVersion: ', applicationTypeVersion, _);
      
      var progress = cli.interaction.progress($('Unregister application type'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        var unregisterApplicationType = {};
        unregisterApplicationType.applicationTypeVersion = applicationTypeVersion;
        var res = client.applicationTypes.unregister(applicationTypeName, unregisterApplicationType, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  var applicationHealth = application.category('health')
    .description($('Commands to send your application health'));
  
  applicationHealth.command('show [applicationName] [eventsHealthStateFilter] [deployedServicePackagesHealthStateFilter]')
    .description($('Show application health'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('--events-health-state-filter <eventsHealthStateFilter>', $('the filter of the event health state'))
    .option('--deployed-applications-health-state-filter <deployedapplicationsHealthStateFilter>', $('the filter of the deployed applications health state'))
    .option('-s --select <fields>', $('select fields to show'))
    .execute(function (applicationName, eventsHealthStateFilter, deployedapplicationsHealthStateFilter, options, _) {
      var progress = cli.interaction.progress($('Show application health'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        applicationName = serviceFabricUtils.parseUrl(applicationName, _);
        if (eventsHealthStateFilter) options.eventsHealthStateFilter = eventsHealthStateFilter;
        if (deployedapplicationsHealthStateFilter) options.deployedapplicationsHealthStateFilter = deployedapplicationsHealthStateFilter;
        var res = client.applicationHealths.get(applicationName, options, _);
        if (options.select) {
          res = serviceFabricUtils.pick(res, options.select, _);
        }
        serviceFabricUtils.setApplicationEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  applicationHealth.command('send [applicationName] [sourceId] [property] [healthState] [description] [timeToLiveInMilliSeconds] [sequenceNumber] [removeWhenExpired]')
    .description($('Send application health, Example: azure servicefabric application health send --application-name fabric:app --source-id monitor --property pc --health-state Ok --description healthy'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('--source-id <sourceId>', $('the id of the source'))
    .option('--property <property>', $('the property'))
    .option('--health-state <healthState>', $('the state of the health, values are [Ok|Warning|Error|Unknown]'))
    .option('--description <description>', $('the description'))
    .option('--time-to-live-in-milliSeconds <timeToLiveInMilliSeconds>', $('the time in milliseconds for live'))
    .option('--sequence-number <sequenceNumber>', $('the number of the sequence'))
    .option('--remove-when-expired <removeWhenExpired>', $('the boolean of the remove when expired'))
    .option('-s --select <fields>', $('select fields to show'))
    .execute(function (applicationName, sourceId, property, healthState, description, timeToLiveInMilliSeconds, sequenceNumber, removeWhenExpired, options, _) {
      var progress = cli.interaction.progress($('Send application health'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        var applicationHealthReport = {};
        if (sourceId) applicationHealthReport.sourceId = sourceId;
        if (property) applicationHealthReport.property = property;
        if (healthState) applicationHealthReport.healthState = serviceFabricUtils.getEnumVal('healthState', healthState);
        if (description) applicationHealthReport.description = description;
        if (timeToLiveInMilliSeconds) applicationHealthReport.timeToLiveInMilliSeconds = timeToLiveInMilliSeconds;
        if (sequenceNumber) applicationHealthReport.sequenceNumber = sequenceNumber;
        if (removeWhenExpired) applicationHealthReport.removeWhenExpired = removeWhenExpired;
        var res = client.applicationHealthReports.send(applicationName, applicationHealthReport, options, _);
        if (options.select) {
          res = serviceFabricUtils.pick(res, options.select, _);
        }
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  var applicationDeployed = application.category('deployed')
    .description($('Commands to manage your deployed application'));
  
  applicationDeployed.command('show [nodeName] [applicationName]')
    .description($('Show deployed application'))
    .option('--node-name <nodeName>', $('the name of the node'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('-s --select <fields>', $('select fields to show'))
    .execute(function (nodeName, applicationName, options, _) {
      var progress = cli.interaction.progress($('Show deployed application'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        var res = null;
        if (!applicationName) {
          res = client.deployedApplications.list(nodeName, options, _);
        }
        else {
          applicationName = serviceFabricUtils.parseUrl(applicationName, _);
          res = client.deployedApplications.get(nodeName, applicationName, options, _);
        }
        if (options.select) {
          res = serviceFabricUtils.pick(res, options.select, _);
        }
        serviceFabricUtils.setApplicationEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  var applicationDeployedHealth = applicationDeployed.category('health')
    .description($('Commands to manage your deployed application health'));
  
  applicationDeployedHealth.command('show [nodeName] [applicationName] [eventsHealthStateFilter] [deployedServicePackagesHealthStateFilter]')
    .description($('Show deployed application health'))
    .option('--node-name <nodeName>', $('the name of the node'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('--events-health-state-filter <eventsHealthStateFilter>', $('the filter of the event health state'))
    .option('--deployed-service-packages-health-state-filter <deployedServicePackagesHealthStateFilter>', $('the filter of the deployed service packages health state'))
    .option('-s --select <fields>', $('select fields to show'))
    .execute(function (nodeName, applicationName, eventsHealthStateFilter, deployedServicePackagesHealthStateFilter, options, _) {
      var progress = cli.interaction.progress($('Show deployed application health'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        applicationName = serviceFabricUtils.parseUrl(applicationName, _);
        if (eventsHealthStateFilter) options.eventsHealthStateFilter = eventsHealthStateFilter;
        if (deployedServicePackagesHealthStateFilter) options.deployedServicePackagesHealthStateFilter = deployedServicePackagesHealthStateFilter;
        var res = client.deployedApplicationHealths.get(nodeName, applicationName, options, _);
        if (options.select) {
          res = serviceFabricUtils.pick(res, options.select, _);
        }
        serviceFabricUtils.setApplicationEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  applicationDeployedHealth.command('send [nodeName] [applicationName] [sourceId] [property] [healthState] [description] [timeToLiveInMilliSeconds] [sequenceNumber] [removeWhenExpired]')
    .description($('Send deployed application health, Example: azure servicefabric deployed application health send --node-name node1 --application-name fabric:app --source-id monitor --property pc --health-state Ok --description healthy'))
    .option('--node-name <nodeName>', $('the name of the node'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('--source-id <sourceId>', $('the id of the source'))
    .option('--property <property>', $('the property'))
    .option('--health-state <healthState>', $('the state of the health, values are [Ok|Warning|Error|Unknown]'))
    .option('--description <description>', $('the description'))
    .option('--time-to-live-in-milliseconds <timeToLiveInMilliseconds>', $('the time in milliseconds for live'))
    .option('--sequence-number <sequenceNumber>', $('the number of the sequence'))
    .option('--remove-when-expired <removeWhenExpired>', $('the boolean of the remove when expired'))
    .execute(function (nodeName, applicationName, sourceId, property, healthState, description, timeToLiveInMilliseconds, sequenceNumber, removeWhenExpired, options, _) {
      var progress = cli.interaction.progress($('Send cluster health'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        applicationName = serviceFabricUtils.parseUrl(applicationName, _);
        var applicationHealthReport = {};
        if (sourceId) applicationHealthReport.sourceId = sourceId;
        if (property) applicationHealthReport.property = property;
        if (healthState) applicationHealthReport.healthState = serviceFabricUtils.getEnumVal('healthState', healthState);
        if (description) applicationHealthReport.description = description;
        if (timeToLiveInMilliseconds) applicationHealthReport.timeToLiveInMilliSeconds = timeToLiveInMilliseconds;
        if (sequenceNumber) applicationHealthReport.sequenceNumber = sequenceNumber;
        if (removeWhenExpired) applicationHealthReport.removeWhenExpired = removeWhenExpired;
        var res = client.deployedApplicationHealthReports.send(nodeName, applicationName, applicationHealthReport, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  var applicationUpgrade = application.category('upgrade')
    .description($('Commands to manage your application upgrade'));
  
  applicationUpgrade.command('show [applicationName]')
    .description($('Show application upgrade'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .execute(function (applicationName, options, _) {
      var progress = cli.interaction.progress($('Show application upgrade'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        applicationName = serviceFabricUtils.parseUrl(applicationName, _);
        var res = client.applicationUpgrades.get(applicationName, options, _);
        serviceFabricUtils.setApplicationEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  applicationUpgrade.command('start [applicationName] [targetApplicationTypeVersion] [parameters] [rollingUpgradeMode] [upgradeReplicaSetCheckTimeoutInSeconds] [forceRestart] [monitoringPolicy] [applicationHealthPolicy]')
    .description($('Start application upgrade, Example: azure servicefabric application upgrade start --application-name fabric:/app --target-application-type-version 1.1 --rolling-upgrade-mode Monitored --force-restart true'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('--target-application-type-version <targetApplicationTypeVersion>', $('the version of the target application type'))
    .option('--parameters <parameters>', $('the parameters'))
    .option('--rolling-upgrade-mode <rollingUpgradeMode>', $('the mode of the rolling upgrade, values are [UnmonitoredAuto|UnmonitoredManual|Monitored]'))
    .option('--upgrade-replica-set-check-timeout-in-seconds <upgradeReplicaSetCheckTimeoutInSeconds>', $('the name of the upgrade domain'))
    .option('--force-restart <forceRestart>', $('the force restart'))
    .option('--monitoring-policy <monitoringPolicy>', $('the policy of the monitoring'))
    .option('--application-health-policy <applicationHealthPolicy>', $('the policy of the health application'))
    .execute(function (applicationName, targetApplicationTypeVersion, parameters, rollingUpgradeMode, upgradeReplicaSetCheckTimeoutInSeconds, forceRestart, monitoringPolicy, applicationHealthPolicy, options, _) {
      applicationName = cli.interaction.promptIfNotGiven('applicationName: ', applicationName, _);
      targetApplicationTypeVersion = cli.interaction.promptIfNotGiven('targetApplicationTypeVersion: ', targetApplicationTypeVersion, _);
      rollingUpgradeMode = cli.interaction.promptIfNotGiven('rollingUpgradeMode: ', rollingUpgradeMode, _);
      
      var progress = cli.interaction.progress($('Start application upgrade'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        var startApplicationUpgradeDescription = {};
        startApplicationUpgradeDescription.name = applicationName;
        startApplicationUpgradeDescription.targetApplicationTypeVersion = targetApplicationTypeVersion;
        if (parameters) {
          startApplicationUpgradeDescription.parameters = JSON.parse(parameters);
        }
        startApplicationUpgradeDescription.upgradeKind = 'Rolling';// TODO
        startApplicationUpgradeDescription.rollingUpgradeMode = serviceFabricUtils.getEnumVal('rollingUpgradeMode', rollingUpgradeMode);
        if (upgradeReplicaSetCheckTimeoutInSeconds) {
          startApplicationUpgradeDescription.upgradeReplicaSetCheckTimeoutInSeconds = Number(upgradeReplicaSetCheckTimeoutInSeconds);
        }
        if (forceRestart === 'true') {
          startApplicationUpgradeDescription.forceRestart = true;
        }
        else if (forceRestart === 'false') {
          startApplicationUpgradeDescription.forceRestart = false;
        }
        if (monitoringPolicy) {
          startApplicationUpgradeDescription.monitoringPolicy = JSON.parse(monitoringPolicy);
          if (startApplicationUpgradeDescription.monitoringPolicy.failureAction) {
            startApplicationUpgradeDescription.monitoringPolicy.failureAction = serviceFabricUtils.getEnumVal('failureAction', startApplicationUpgradeDescription.monitoringPolicy.failureAction);
          }
        }
        if (applicationHealthPolicy) {
          startApplicationUpgradeDescription.applicationHealthPolicy = JSON.parse(applicationHealthPolicy);
        }
        var res = client.applicationUpgrades.start(serviceFabricUtils.parseUrl(applicationName, _), startApplicationUpgradeDescription, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  applicationUpgrade.command('update [applicationName] [rollingUpgradeMode] [forceRestart] [failureAction] [upgradeReplicaSetCheckTimeoutInSeconds] [healthCheckWaitDurationInMilliseconds] [healthCheckStableDurationInMilliseconds] [healthCheckRetryTimeoutInMilliseconds] [upgradeTimeoutInMilliseconds] [upgradeDomainTimeoutInMilliseconds] [applicationHealthPolicy]')
    .description($('Update application upgrade, Example: azure servicefabric application upgrade update --application-name fabric:/app --rolling-upgrade-mode Monitored'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('--rolling-upgrade-mode <rollingUpgradeMode>', $('the mode of the rolling upgrade, values are [UnmonitoredAuto|UnmonitoredManual|Monitored]'))
    .option('--force-restart <forceRestart>', $('the boolean of the force restart'))
    .option('--failure-action <failureAction>', $('the mode of the failure action, values are [Rollback|Manual]'))
    .option('--upgrade-replica-set-check-timeout-in-seconds <upgradeReplicaSetCheckTimeoutInSeconds>', $('the mode of the rolling upgrade'))
    .option('--health-check-wait-duration-in-milliseconds <healthCheckWaitDurationInMilliseconds>', $('the mode of the rolling upgrade'))
    .option('--health-check-stable-duration-in-milliseconds <healthCheckStableDurationInMilliseconds>', $('the mode of the rolling upgrade'))
    .option('--health-check-retry-timeout-in-milliseconds <healthCheckRetryTimeoutInMilliseconds>', $('the mode of the rolling upgrade'))
    .option('--upgrade-timeout-in-milliseconds <upgradeTimeoutInMilliseconds>', $('the mode of the rolling upgrade'))
    .option('--upgrade-domain-timeout-in-milliseconds <upgradeDomainTimeoutInMilliseconds>', $('the mode of the rolling upgrade'))
    .option('--application-health-policy <applicationHealthPolicy>', $('the policy of the health application'))
    .execute(function (applicationName, rollingUpgradeMode, forceRestart, failureAction, upgradeReplicaSetCheckTimeoutInSeconds, healthCheckWaitDurationInMilliseconds, healthCheckStableDurationInMilliseconds, healthCheckRetryTimeoutInMilliseconds, upgradeTimeoutInMilliseconds, upgradeDomainTimeoutInMilliseconds, applicationHealthPolicy, options, _) {
      applicationName = cli.interaction.promptIfNotGiven('applicationName:', applicationName, _);
      
      var progress = cli.interaction.progress($('Update application upgrade'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        var updateApplicationUpgradeDescription = {};
        updateApplicationUpgradeDescription.name = applicationName;
        updateApplicationUpgradeDescription.upgradeKind = 1;
        updateApplicationUpgradeDescription.updateDescription = {};
        if (rollingUpgradeMode) {
          updateApplicationUpgradeDescription.updateDescription.rollingUpgradeMode = serviceFabricUtils.getEnumVal('rollingUpgradeMode', rollingUpgradeMode);
        }
        if (forceRestart === 'true') {
          updateApplicationUpgradeDescription.updateDescription.forceRestart = true;
        }
        else if (forceRestart === 'false') {
          updateApplicationUpgradeDescription.updateDescription.forceRestart = false;
        }
        if (failureAction) {
          updateApplicationUpgradeDescription.updateDescription.failureAction = serviceFabricUtils.getEnumVal('failureAction', failureAction);
        }
        if (upgradeReplicaSetCheckTimeoutInSeconds) {
          updateApplicationUpgradeDescription.updateDescription.upgradeReplicaSetCheckTimeoutInSeconds = Number(upgradeReplicaSetCheckTimeoutInSeconds);
        }
        if (healthCheckWaitDurationInMilliseconds) {
          updateApplicationUpgradeDescription.updateDescription.healthCheckWaitDurationInMilliseconds = healthCheckWaitDurationInMilliseconds;
        }
        if (healthCheckStableDurationInMilliseconds) {
          updateApplicationUpgradeDescription.updateDescription.healthCheckStableDurationInMilliseconds = healthCheckStableDurationInMilliseconds;
        }
        if (healthCheckRetryTimeoutInMilliseconds) {
          updateApplicationUpgradeDescription.updateDescription.healthCheckRetryTimeoutInMilliseconds = healthCheckRetryTimeoutInMilliseconds;
        }
        if (upgradeTimeoutInMilliseconds) {
          updateApplicationUpgradeDescription.updateDescription.upgradeTimeoutInMilliseconds = upgradeTimeoutInMilliseconds;
        }
        if (upgradeDomainTimeoutInMilliseconds) {
          updateApplicationUpgradeDescription.updateDescription.upgradeDomainTimeoutInMilliseconds = upgradeDomainTimeoutInMilliseconds;
        }
        if (applicationHealthPolicy) {
          updateApplicationUpgradeDescription.applicationHealthPolicy = JSON.parse(applicationHealthPolicy);
        }
        var res = client.applicationUpgrades.update(serviceFabricUtils.parseUrl(applicationName, _), updateApplicationUpgradeDescription, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  applicationUpgrade.command('resume [applicationName] [upgradeDomainName]')
    .description($('Resume application upgrade'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('--upgrade-domain-name <upgradeDomainName>', $('the name of the upgrade domain'))
    .execute(function (applicationName, upgradeDomainName, options, _) {
      applicationName = cli.interaction.promptIfNotGiven('applicationName:', applicationName, _);
      upgradeDomainName = cli.interaction.promptIfNotGiven('upgradeDomainName:', upgradeDomainName, _);
      
      var progress = cli.interaction.progress($('Resume application upgrade'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        applicationName = serviceFabricUtils.parseUrl(applicationName, _);
        var resumeApplicationUpgrade = {};
        resumeApplicationUpgrade.upgradeDomainName = upgradeDomainName;
        var res = client.applicationUpgrades.resume(applicationName, resumeApplicationUpgrade, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  applicationUpgrade.command('rollback [applicationName]')
    .description($('Start application upgrade rollback'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .execute(function (applicationName, options, _) {
      applicationName = cli.interaction.promptIfNotGiven('applicationName:', applicationName, _);
      
      var progress = cli.interaction.progress($('Start application upgrade rollback'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        applicationName = serviceFabricUtils.parseUrl(applicationName, _);
        var res = client.applicationRollbacks.start(applicationName, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
};
