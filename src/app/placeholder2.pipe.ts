import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "appPlaceholder"
})
export class PlaceholderPipe implements PipeTransform {
  transform<T extends number>(value: T | null | undefined, placeholder: T): T;
  transform<T extends string>(value: T | null | undefined, placeholder: T): T;
  transform<T extends string | number>(
    value: T | null | undefined,
    placeholder: T
  ): T {
    if (this.placeholderRequiredFor(value)) {
      return placeholder;
    } else {
      return value;
    }
  }

  private placeholderRequiredFor<T>(
    value: T | null | undefined
  ): value is null | undefined {
    if (typeof value === "string") {
      return value === undefined || value === null || value === "";
    }
    return value === undefined || value === null || Number.isNaN(value);
  }
}
