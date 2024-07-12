import { LinkedList } from './LinkedList';
import { Nullable } from './helpers';

/*
    Use this when trying to access a bucket.

    if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bound");
    }
*/

export type Entry<T> = [string, T];

export class HashMap<T> {
    private capacity: number = 16;
    private loadFactor: number = 0.75;

    private buckets = this.createBuckets(this.capacity);

    set(key: string, value: T): Nullable<T> {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error('Trying to access index out of bound');
        }

        let bucket = this.buckets[index];

        if (bucket === null) {
            bucket = this.buckets[index] = new LinkedList();
        }

        const existingIndex = bucket.findPred(([entryKey]) => entryKey === key);

        if (existingIndex === -1) {
            bucket.append([key, value]);
            return null;
        }

        const existing = bucket.at(existingIndex)!;
        const old = existing[1];
        existing[1] = value;

        return old;
    }

    get(key: string): Nullable<T> {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error('Trying to access index out of bound');
        }

        const bucket = this.buckets[index];

        if (!bucket) return null;

        const existingIndex = bucket.findPred(([entryKey]) => entryKey === key);

        if (existingIndex === -1) return null;

        return bucket.at(existingIndex)![1];
    }

    has(key: string): boolean {
        return this.get(key) !== null;
    }

    remove(key: string): boolean {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error('Trying to access index out of bound');
        }

        const bucket = this.buckets[index];

        if (!bucket) return false;

        const existingIndex = bucket.findPred(([entryKey]) => entryKey === key);

        return !!bucket.removeAt(existingIndex);
    }

    length(): number {
        throw new Error('Not implemented');
    }

    clear() {
        throw new Error('Not implemented');
    }

    keys(): string[] {
        throw new Error('Not implemented');
    }

    values(): T[] {
        throw new Error('Not implemented');
    }

    entries(): [string, T][] {
        throw new Error('Not implemented');
    }

    hash(key: string) {
        const prime = 31;
        let hashCode = 0;

        for (let i = 0; i < key.length; i++) {
            hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    private createBuckets(capacity: number): Nullable<LinkedList<Entry<T>>>[] {
        return Array(capacity).fill(null);
    }
}
