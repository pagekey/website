lang=$1

function print_usage() {
    echo "Usage: $0 [en|es]"
    exit 1
}
if [ -z "$lang" ]; then
    print_usage
fi
if [ "$lang" != "en" ] && [ "$lang" != "es" ]; then
    print_usage
fi

for i in $(find common -type f); do
    newfile="$lang${i#common}"
    echo $newfile
    # Create any folders that may be needed
    echo $(dirname $newfile) yeet
    mkdir -p $(dirname $newfile)
    # Copy every file in common into the dir
    cp $i $newfile
    # If that file is not already gitignored, add it
    if [ "$(grep -c $newfile .gitignore)" = "0" ]; then
        echo $newfile >> .gitignore
    fi
done

cd $lang && mkdocs serve -a 0.0.0.0:8000
