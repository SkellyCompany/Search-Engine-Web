import { Log } from '../models/Log';
import { ILogger } from '../ILogger'; 
import ReactGA from 'react-ga';

export class GoogleAnalyticsLogger implements ILogger {
    log(log: Log): void {
        ReactGA.ga('send', {
            hitType: 'event',
            category: JSON.stringify(log.type),
            action: log.name,
            description: log.description,
            parameters: JSON.stringify(log.parameters)
        })
    }
}
