# This should probably be a Gist, but, oh well :)

def heapPermutation(a, size):
    if size == 1:
        print(a)
        return
 
    for i in range(size):
        heapPermutation(a, size-1)

        if size & 1:
            a[0], a[size-1] = a[size-1], a[0]
        else:
            a[i], a[size-1] = a[size-1], a[i]
 
 
choices = ["Hello", "Tree", "Amount"]
n = len(choices)
result = heapPermutation(choices, n)

print(result)


    