Method #1: Brute force way would involve a nested iteration to check for every pair of numbers:

This would take O(N2)

Method #2: Another way is to use a set to remember the numbers we've seen so far. Then for a given number, we can check if there is another number that, if added, would sum to k. This would be O(N) since lookups of sets are O(1) each.

Method #3: Yet another solution involves sorting the list. We can then iterate through the list and run a binary search on K - lst[i]. Since we run binary search on N elements, this would take O(N log N) with O(1) space.
