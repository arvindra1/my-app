def get_min_max_diff(s1, s2):
    # replace question marks with a and z to get the minimum and maximum difference
    s1_min = s1.replace('?', 'a')
    s2_min = s2.replace('?', 'a')
    s1_max = s1.replace('?', 'z')
    s2_max = s2.replace('?', 'z')
    
    # calculate the minimum and maximum difference between the two strings
    diff_min = abs(sum(ord(c1) - ord(c2) for c1, c2 in zip(s1_min, s2_min)))
    diff_max = abs(sum(ord(c1) - ord(c2) for c1, c2 in zip(s1_max, s2_max)))
    
    return diff_min, diff_max

# take input from user
s1 = input("enter the first string:")
s2 = input("enter the second string:")

# get the minimal and maximal difference between the two strings
diff_min, diff_max = get_min_max_diff(s1, s2)

# print the output
print(diff_min, diff_max)
