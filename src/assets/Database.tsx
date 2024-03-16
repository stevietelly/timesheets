import { Level } from 'level';




export interface RecentsEntry {
    title: string;
    date: string; // Consider using a Date object for better manipulation
    location: string;
};

export class Decoder {
    encodeTimetableEntry(entry: RecentsEntry): string {
        return JSON.stringify(entry);
    }

    // Function to decode a string back into a TimetableEntry object
    decodeTimetableEntry(data: string): RecentsEntry {
        return JSON.parse(data);
    }
}


class DatabaseAPI {
    database: Level<string | any, string | any>;
    count: number;
    constructor(database_name: string) {
        this.database = new Level(database_name, { valueEncoding: 'json' });
        this.count = 0;
    }

    async fetchOne(key: string): Promise<string | null> {
        try {
            return await this.database.get(key);
        } catch (error) {
            console.error('Error getting data:', error);
            return null;
        }
    }
    async insertOne(value: string): Promise<void> {
        var key: number = await this.getLength()
        try {
            await this.database.put(key.toString(), value);
        } catch (error) {
            console.error('Error setting data:', error);
        }
    }

    async getKey(value: string): Promise<string | null>{
  
        for await (const [key, ref_value] of this.database.iterator({ gte: '1' })) {
            
            if (ref_value === value){return key}
        }
        return null
    }

    // Retrieve all entries in the database
    async getAll(): Promise<Array<any>> {
        var values: Array<any> = []
        for await (const [_, value] of this.database.iterator({ gte: '1' })) {
            
            values.push(value)
        }
        return values
    }

    // Get number of entries
    async getLength(): Promise<number> {
        var count: number = 0;
        for await (const [key, value] of this.database.iterator({ gte: '1' })) {
            // console.log(key, value) // 2
            count += 1;
        }

        return count
  
    }
}
export class RecentsDatabaseAPI extends DatabaseAPI {
    constructor() {
        super("./recents-database.db")
    }
}



