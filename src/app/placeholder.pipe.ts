import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'appPlaceholder',
})
export class PlaceholderPipe implements PipeTransform {
	transform(
		value: string | null | undefined,
		placeholder: string = 'None',
	): string {
		if (this.placeholderRequiredFor(value)) {
			return placeholder;
		} else {
			return value;
		}
	}

	private placeholderRequiredFor(
		value: string | null | undefined,
	): value is null | undefined {
		return value === undefined || value === null || value === '';
	}
}
