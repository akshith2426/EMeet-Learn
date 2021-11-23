import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    /***********NAVBAR STYLES**********/
    body: {
        margin: "0",
        padding: "0",
    },

    navbarRoot: {
        flexGrow: 1,
    },

    navbar: {
        width: '100%',
        backgroundColor: "#ffffff",
    },

    logo: {
        height: '3%',
        width: '3%',
    },

    navbarTitle: {
        flexGrow: 1,
        color: '#000000'
    },
    
    navbarButton: {
        backgroundColor: '#F75F4A',
        margin: '5px',
        padding:'5px 20px',
        color: '#ffffff',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#F75F4A',
            textDecoration: 'underline'
        }
    },

    blueBox: {
        height: '8vh',
        width: '100vw',
        backgroundColor: '#ffffff',
        [theme.breakpoints.down('md')]: {
            height: '10vh'
        }
    },

    blueTag: {
        margin: '1%',
        textAlign: 'center',
        color:'#F75F4A'
    },

    /**********HOME STYLES**********/
    homeRoot: {
        flexGrow: 1,
    },

    paper: {
      padding: theme.spacing(10),
      textAlign: 'left',
      //backgroundColor: '#f5f5f5'
    },

    homeTitle: {
        color: '#F75F4A',
        fontWeight: 'bold'
    },

    tagline: {
        color: '#152A43'
    },

    img: {
        height: '90vh',
        width: '1',
        overflow: 'hidden',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        display: 'flex',
    },

    signupButton: {
        backgroundColor: '#ffffff',
            borderColor: '#F75F4A',
            color:'#F75F4A',
        margin: '5px',
        width: '18vw',
        borderRadius: 0,
        textTransform: 'none',
        border: '2px solid',
        '&:hover': {
            backgroundColor: '#F75F4A',
        borderColor: '#ffffff',
        color: '#ffffff',
        }
    },

    signinButton: {
        backgroundColor: '#ffffff',
            borderColor: '#F75F4A',
            color:'#F75F4A',
        margin: '5px',
        width: '18vw',
        borderRadius: 0,
        textTransform: 'none',
        border: '2px solid',
        '&:hover': {
            backgroundColor: '#F75F4A',
        borderColor: '#ffffff',
        color: '#ffffff',
        }
    },

    /**********SIGNUP AND SIGNIN STYLES**********/
    signin:{
        margin: "10vh auto",
        padding: 10,
        height: '80vh',
        width: '30vw',
        backgroundColor: '#ffffff',
        [theme.breakpoints.down('md')]: {
            width: '50vw'
        },
        [theme.breakpoints.down('sm')]: {
            width: '80vw'
        }
    },

    bigLogo: {
        height: '8%',
        width: '10%',
    },

    textField: {
        marginTop: "10px",
        width: '100%',
        height: '5%'
    },

    signup:{
        margin: "5vh auto",
        padding: 10,
        height: '90vh',
        width: '30vw',
        backgroundColor: '#ffffff',
        [theme.breakpoints.down('md')]: {
            width: '50vw'
        },
        [theme.breakpoints.down('sm')]: {
            width: '80vw'
        }
    },

    buttonSignup: {
        marginTop: '2%'
    },

    buttonSignin: {
        marginTop: '2%'
    },

    image: {
        marginTop: '5%',
        width: '50vw'
    },
    
    footerSigninButton: {
        backgroundColor: '#ffffff',
            borderColor: '#F75F4A',
            color:'#F75F4A',
        margin: '5px',
        fontWeight: 'bold',
        width: '12vw',
        borderRadius: 0,
        textTransform: 'none',
        border: '2px solid',
        '&:hover': {
            backgroundColor: '#F75F4A',
        borderColor: '#ffffff',
        color: '#ffffff',
        }
    },

    footerSignupButton: {
        backgroundColor: '#ffffff',
            borderColor: '#F75F4A',
            color:'#F75F4A',
        margin: '5px',
        fontWeight: 'bold',
        width: '12vw',
        borderRadius: 0,
        textTransform: 'none',
        border: '2px solid',
        '&:hover': {
            backgroundColor: '#F75F4A',
        borderColor: '#ffffff',
        color: '#ffffff',
        }
    },

    listIcon: {
        color: '#f5f5f5',
        fontSize: '2rem'
    },

    listText: {
        color: '#f5f5f5',
        padding: '2%',
        fontSize: '2rem',
        fontWeight: 'bold'
    },

    /**********FOOTER STYLES**********/
    footerHeading: {
        color: '#737373',
        fontWeight: 'bold'
    },

    footerList: {
        color: '#737373',
        fontSize: '0.75rem'
    }

}));

export default useStyles;