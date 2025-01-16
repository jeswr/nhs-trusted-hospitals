docker build -t rmlmapper .
docker run --rm -v $(pwd):/data rmlmapper -m rules.rml.ttl
