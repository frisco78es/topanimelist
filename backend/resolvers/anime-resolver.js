const list_resolver = {
    Query: {
        getList: (parent, args, context, info) => {
            console.log(args.name)
            return {
                id: 1
            }
        }
    }
}

export { list_resolver }