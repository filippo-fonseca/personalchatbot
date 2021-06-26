#include <time.h> /* Needed just for srand seed */
#include <stdlib.h>
#include <stdio.h>
const tenmillion = 1000000L;
/* #define tenmillion 10000000L */
void Randomize() {
srand( (unsigned)time( NULL ) ) ;
}
int Random(int Max) {
return ( rand() % Max)+ 1;
}
int main(int argc, char* argv[])
{
int i;
int totals[19];
printf("Rolling Ten Million Dice\n") ;
Randomize() ;
for (i=3;i<=18;i++)
totals[ i ]=0;
for (i=0;i< tenmillion;i++)
{
int d1=Random(6) ;
int d2=Random(6) ;
int d3=Random(6) ;
int total=d1+d2+d3;
totals[ total ]++;
}
for (i=3;i<=18;i++)
{
printf("%i %i\n\r",i,totals[ i ]) ;
}
return 0;
}
