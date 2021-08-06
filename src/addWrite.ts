import {MutableProperty, Property} from "./Property";

export function addWrite<T>(write: (t: T) => void): (source: Property<T>) => MutableProperty<T> {
    return source => {
        return {
            onChange: source.onChange,
            get value(): T {
                return source.value
            },
            set value(value: T) {
                write(value)
            },
            update() {
                write(source.value)
            }
        }
    }
}