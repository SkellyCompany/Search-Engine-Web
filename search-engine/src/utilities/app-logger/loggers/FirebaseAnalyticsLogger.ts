import { Log } from '../models/Log';
import { ILogger } from '../ILogger';
import fire from '../../../../firebase.config'

export class FirebaseAnalyticsLogger implements ILogger {
    log(log: Log): void {
        if(log.parameters) {
            log.parameters["@type"] = log.type
            log.parameters["@description"] = log.description
        } else {
            log.parameters = { }
            log.parameters["@type"] = log.type
            log.parameters["@description"] = log.description
        }
        
        fire.analytics().logEvent(log.name, log.parameters)
    }
}
