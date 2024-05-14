import django
django.setup()
from ministore import seed

if __name__ == "__main__":
    seed.run()