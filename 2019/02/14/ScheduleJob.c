#include<stdio.h>
#include <unistd.h>

void ScheduleJob(void(*f)(int), int ms) {
    usleep(ms * 1000);
    (*f)(ms);
}

void test (int ms) {
    printf("If you see this it means the test function was executed successfully after %d milliseconds of delay!", ms);
}

int main() {
   ScheduleJob(test, 5000);
}
