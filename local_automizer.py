import subprocess


subprocess.call("git add .", shell=True)    
subprocess.call("git commit -m 'automizer'", shell=True)    
subprocess.call("git push origin master", shell=True)    