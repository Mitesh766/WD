#include <stdio.h>

void main() {
    int amt ;
    char code;

    printf("Enter the booking amount: ");
    scanf("%d", &amt);
    printf("Enter the  card code : ");
    scanf(" %c", &code);

    if (amt == 20000 && code == 'A') {
        printf("VVIP");
    } else if (amt == 10000 && code == 'B') {
        printf("VIP");
    } else if (amt == 5000 && code == 'C') {
        printf("Special County");
    } else if (amt == 2000 && code == 'D') {
        printf("General County");
    } else {
        printf("Invalid booking price or code");
    }

    
}