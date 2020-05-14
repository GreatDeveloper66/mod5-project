def index
  @asana = Asana.find_by(id: params[:id])
  render json:@asana
end
def show
  render json: Asana.all
end
