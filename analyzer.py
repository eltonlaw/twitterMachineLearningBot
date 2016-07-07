import sys, json

def read_in():
	lines = ""
	for line in sys.stdin.readlines():
		lines += (line)
	return json.loads(lines)

def main():
	lines = read_in()
	for line in lines:
		print line["text"]

if __name__ =='__main__':
	main()
