# speed-loop.py

import time

def main():

  cycles = 1000000000
  start = time.perf_counter()

  for i in range(0, cycles):
    pass # Empty loop

  end = time.perf_counter()
  duration = end - start
  print("Python looped %d times in %.3f seconds" % (cycles, duration))

main()