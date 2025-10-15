import { StoreDb } from '@framework/stores/db';
import { ITable } from '@framework/utils/database';
import { TranslateRequestRecord } from '../../core/contracts/dtc';
import { ThirdPartyData } from '../contracts/third-party-data';
import { Diagnostic } from '../contracts/diagnostic';
import { Trip } from '../contracts/trip';
import { TripParameter } from '../contracts/trip-parameter';
import { TripLocation } from '../contracts/trip-location';
import { Alarm } from '../contracts/alarm';
import { Dynamic } from '../contracts/dynamic';


export const dataStore = new class TripStore {
    db = new StoreDb('data-v2', 4, {
        alarms: { key: 'id', autoIncrement: true },
        trips: { key: 'id', autoIncrement: true },
        parameters: { key: 'id', autoIncrement: true },
        locations: { key: 'id', autoIncrement: true },
        diagnostics: { key: 'id', autoIncrement: true },
        ThirdPartyDatas: { key: 'id', autoIncrement: true },
        dynamics: { key: 'id', autoIncrement: true },
        dtcTranslateRequests: { key: 'id', autoIncrement: true },
    });

    get trips(): ITable<Trip, string> {
        return this.db.getTable<Trip, string>('trips');
    }

    get parameters(): ITable<TripParameter, string> {
        return this.db.getTable<TripParameter, string>('parameters');
    }

    get locations(): ITable<TripLocation, string> {
        return this.db.getTable<TripLocation, string>('locations');
    }

    get alarms(): ITable<Alarm, string> {
        return this.db.getTable<Alarm, string>('alarms');
    }

    get diagnostics(): ITable<Diagnostic, string> {
        return this.db.getTable<Diagnostic, string>('diagnostics');
    }

    get dynamics(): ITable<Dynamic, string> {
        return this.db.getTable<Dynamic, string>('dynamics');
    }

    get ThirdPartyDatas(): ITable<ThirdPartyData, string> {
        return this.db.getTable<ThirdPartyData, string>('ThirdPartyDatas');
    }
    
    get dtcTranslateRequests(): ITable<TranslateRequestRecord, number> {
        return this.db.getTable<TranslateRequestRecord, number>('dtcTranslateRequests');
    }
}
