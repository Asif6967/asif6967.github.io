#include <iostream>
using namespace std;

int main() {
    int revenue, cost;
    cout << "Enter revenue: ";
    cin >> revenue;
    cout << "Enter cost: ";
    cin >> cost;

    int profit = revenue - cost;
    cout << "Business Profit = " << profit << endl;

    return 0;
}
