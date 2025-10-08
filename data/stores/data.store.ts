import { StoreDb } from '@framework/stores/db';
import { ITable } from '@framework/utils/database';
import { TranslateRequestRecord } from '@diag/contracts/translate';
import { ThirdPartyData } from '@data/contracts/third-party-data';
import { Diagnostic } from '@data/contracts/diagnostic';
import { Trip } from '@data/contracts/trip';
import { TripParameter } from '@data/contracts/trip-parameter';
import { TripLocation } from '@data/contracts/trip-location';
import { Alarm } from '@data/contracts/alarm';
import { Dynamic } from '@data/contracts/dynamic';


export const dataStore = new class TripStore {
    db = new StoreDb('data-v2', 2, {
        alarms: { key: 'id' },
        trips: { key: 'id' },
        parameters: { key: 'id' },
        locations: { key: 'id' },
        diagnostics: { key: 'id' },
        testResults: { key: 'id' },
        ThirdPartyDatas: { key: 'id' },
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

    get testResults(): ITable<Dynamic, string> {
        return this.db.getTable<Dynamic, string>('testResults');
    }

    get ThirdPartyDatas(): ITable<ThirdPartyData, string> {
        return this.db.getTable<ThirdPartyData, string>('ThirdPartyDatas');
    }
    
    get dtcTranslateRequests(): ITable<TranslateRequestRecord, number> {
        return this.db.getTable<TranslateRequestRecord, number>('dtcTranslateRequests');
    }
}
