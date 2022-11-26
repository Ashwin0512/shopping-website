import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardCategory (props) {
    console.log(props.img)
    return(
        <Card sx={{maxWidth:345}}>
            <CardActionArea>
                <CardMedia 
                    component='img'
                    height="200"
                    image={props.img}
                />
                <CardContent>
                    <Typography style={{textAlign:'center'}} variant="h5">{props.name}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}