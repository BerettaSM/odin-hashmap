/*
    Use this when trying to access a bucket.

    if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bound");
    }
*/

export class HashMap<T> {
    private capacity: number = 16;
    private loadFactor: number = 0.75;

    set(key: string, value: T) {}

    get(key: string): T {
        throw new Error('Not implemented');
    }

    has(key: string): boolean {
        throw new Error('Not implemented');
    }

    remove(key: string): boolean {
        throw new Error('Not implemented');
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
}
