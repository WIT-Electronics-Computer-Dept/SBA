import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupByService {

  constructor() { }
  groupAndSortBy<T, K extends keyof T>(
    arr: T[],
    groupByProperty: K,
    sortByProperty: K
  ): Record<string, T[]> {
    const groupedData = arr.reduce((memo, x) => {
      const groupKey = x[groupByProperty] as unknown as string; // Cast to string
      if (!memo[groupKey]) {
        memo[groupKey] = [];
      }
      memo[groupKey].push(x);
      return memo;
    }, {} as Record<string, T[]>);

    // Sort each group by the specified property
    for (const group in groupedData) {
      if (groupedData.hasOwnProperty(group)) {
        groupedData[group].sort((a, b) => {
          const aValue = a[sortByProperty] as unknown as string; // Cast to string
          const bValue = b[sortByProperty] as unknown as string; // Cast to string
          return aValue.localeCompare(bValue);
        });
      }
    }

    return groupedData;
  }

  groupBy<T>(arr: T[], property: keyof T): Record<string, T[]> {
    return arr.reduce((memo, x) => {
      const groupKey = x[property] as unknown as string; // Cast to string
      if (!memo[groupKey]) {
        memo[groupKey] = [];
      }
      memo[groupKey].push(x);
      return memo;
    }, {} as Record<string, T[]>);
  }

}
