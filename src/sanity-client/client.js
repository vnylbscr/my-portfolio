import sanityClient from "@sanity/client"

export default sanityClient({
    projectId:"nnice2kn",
    dataset:"production",
    useCdn:true
});