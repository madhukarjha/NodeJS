/* speed-loop.c */
#include <stdio.h>
#include <time.h>
int main() {
  int cycles = 1000000000;
  clock_t start, end;
  double duration;
  start = clock();
  for (int i = 0; i < cycles; i++) {
    /* Empty loop */
  }
  end = clock();
  duration = ((double)(end - start)) / CLOCKS_PER_SEC;
  printf("C looped %d times in %lf seconds\n", cycles,duration);
  return 0;
}