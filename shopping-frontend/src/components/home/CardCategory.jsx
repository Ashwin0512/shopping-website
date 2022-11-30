import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardCategory (props) {
    return(
        <Card sx={{maxWidth:345}}>
            <CardActionArea>
                <CardMedia 
                    component='img'
                    height="175"
                    image={props.img}
                />
                <CardContent>
                    <Typography style={{textAlign:'center'}} variant="h6">{props.name}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}