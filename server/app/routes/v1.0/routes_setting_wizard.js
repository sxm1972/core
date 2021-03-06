/*
 Copyright [2016] [Relevance Lab]

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var logger = require('_pr/logger')(module);
var settingWizard = require('_pr/model/setting-wizard');


module.exports.setRoutes = function(app, sessionVerificationFunc) {
    app.all('/setting-wizard/*', sessionVerificationFunc);

    app.get('/setting-wizard/org/:orgId', function(req, res) {
        settingWizard.getSettingWizardByOrgId(req.params.orgId, function(err, settingWizard) {
            if (err) {
                res.status(500).send(errorResponses.db.error);
                return;
            }
            res.status(200).send(settingWizard);
            return;
        });
    });
};