self.__uv$config = {
    prefix: '/static/uv/go/', //it can't do da going unless its pointing to /uv/go
    bare: '/bare/', 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv.handler.js', // /active doesn't exist now does it
    bundle: '/static/uv.bundle.js',
    config: '/static/uv.config.js',
    sw: '/static/uv.sw.js',
};