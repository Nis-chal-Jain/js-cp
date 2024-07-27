#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int z;
    cin >> z;
    for (int q = 0; q < z; q++) {
        int n, k;
        cin >> n >> k;
        vector<int> x(n), y(n);
        for (int i = 0; i < n; i++) {
            cin >> x[i];
        }
        for (int i = 0; i < n; i++) {
            cin >> y[i];
        }
        int max = 0;
        int myrank = y[--k];
        for (int j = 0; j < n; j++) {
            vector<int> myarr = y;
            int cur = 0;

            swap(myarr[j], myarr[k]);

            while (myarr.size() > 1) {
                if (myarr[0] > myarr[1]) {
                    if (myarr[0] == myrank) {
                        cur++;
                    }
                    if (myarr[1] == myrank) {
                        break;
                    }
                    swap(myarr[0], myarr[1]);
                    myarr.erase(myarr.begin());
                }
                else if (myarr[0] < myarr[1]) {
                    if (myarr[1] == myrank) {
                        cur++;
                    }
                    if (myarr[0] == myrank) {
                        break;
                    }
                    myarr.erase(myarr.begin());
                }
            }
            if (max < cur) {
                max = cur;
            }
        }
        cout << max << endl;
    }
    return 0;
}
